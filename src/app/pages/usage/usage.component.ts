import { UsageStatusType } from '../../shared/forms/usage.form';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { getUsageForm } from 'src/app/shared/forms/usage.form';
import { getRatedProductUsageForm } from 'src/app/shared/forms/ratedProductUsage.form';
import { getRelatedParty } from 'src/app/shared/forms/relatedParty.form';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
})

export class UsageComponent implements OnInit {
  form: FormGroup | null = null;
  enumKeys: any = [];
  usageEnum = UsageStatusType;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
    this.enumKeys = Object.keys(this.usageEnum).filter(f => !isNaN(Number(f)));
  }

  initForm(): void {
    this.form = getUsageForm();
    /*const idFormControl = this.form.get('id') as FormControl;
    (idFormControl.get([0]) as FormGroup).controls.value.setValue('0');*/
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

  log(): void {
    console.log(this.form?.value);
  }
}
