import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rated-product-usage',
  templateUrl: './rated-product-usage.component.html',
  styleUrls: ['./rated-product-usage.component.scss']
})
export class RatedProductUsageComponent implements OnInit {
  @Input() form: FormGroup | null = null;
  @Input() formArrayIndex: number | null = null;

  constructor() { }

  ngOnInit(): void { }

  get getRatedProductUsageForm(): FormArray {
    return this.form?.get('ratedProductUsage') as FormArray;
  }

}
