import { Usage } from './../../shared/models/usage.model';
import { UsageStatusType } from '../../shared/forms/usage.form';
import { FormArray, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getUsageForm } from 'src/app/shared/forms/usage.form';
import { getRatedProductUsageForm } from 'src/app/shared/forms/ratedProductUsage.form';
import { getRelatedParty } from 'src/app/shared/forms/relatedParty.form';
import { getUsageCharacteristic } from 'src/app/shared/forms/usageCharacteristic.form';
import { getUsageSpecificationRef } from 'src/app/shared/forms/usageSpecificationRef.form';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
})

export class UsageComponent implements OnInit {
  form: FormGroup | null = null;
  enumKeys: any = [];
  usageEnum = UsageStatusType;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private service: FbBaseService<Usage>,
      public dialogRef: MatDialogRef<UsageComponent>
    ) {}

  ngOnInit(): void {
    this.initForm();
    this.enumKeys = Object.keys(this.usageEnum).filter(f => !isNaN(Number(f)));
  }

  initForm(): void {
    this.form = getUsageForm();

    if (this.data.editItem != null){
      this.form.setValue(this.data.editItem);
    }
  }

  get getRatedProductUsageForm(): FormArray {
    return this.form?.get('ratedProductUsage') as FormArray;
  }

  addNewRatedProduct(): void {
    const id = this.form?.get('ratedProductUsage') as FormArray;
    id.push(getRatedProductUsageForm());
  }

  removeRatedProduct(index: number): void {
    const formArray = this.form?.get('ratedProductUsage') as FormArray;
    formArray.removeAt(index);
  }

  get getRelatedPartyForm(): FormArray {
    return this.form?.get('relatedParty') as FormArray;
  }

  addNewRelatedParty(): void {
    const id = this.form?.get('relatedParty') as FormArray;
    id.push(getRelatedParty());
  }

  removeRelatedParty(index: number): void {
    const formArray = this.form?.get('relatedParty') as FormArray;
    formArray.removeAt(index);
  }

  get getUsageCharacteristic(): FormArray {
    return this.form?.get('usageCharacteristic') as FormArray;
  }

  addNewUsageCharacteristic(): void {
    const id = this.form?.get('usageCharacteristic') as FormArray;
    id.push(getUsageCharacteristic());
  }

  removeUsageCharacteristic(index: number): void {
    const formArray = this.form?.get('usageCharacteristic') as FormArray;
    formArray.removeAt(index);
  }

  get getUsageSpecificationRef(): FormArray {
    return this.form?.get('usageSpecification') as FormArray;
  }

  addNewUsageSpecificationRef(): void {
    const id = this.form?.get('usageSpecification') as FormArray;
    id.push(getUsageSpecificationRef());
  }

  removeSpecificationRef(index: number): void {
    const formArray = this.form?.get('usageSpecification') as FormArray;
    formArray.removeAt(index);
  }

  save(): void {
    if (this.form != null) {
      if (this.data.editItem == null) {
        this.service.add('usage', this.form.getRawValue()).then(id => { console.log(id); });
        console.log('Added new item \n' + this.form?.value);
      } else {
        this.service.update('usage', this.data.editItem.id, this.form?.value);
        console.log('Updated item \n' + this.form?.value);
      }
    }
  }

  log(): void {
    console.log(this.form?.value);
  }
}
