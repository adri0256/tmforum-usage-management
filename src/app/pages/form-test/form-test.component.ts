import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getUsageForm } from 'src/app/shared/forms/usage.form';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {
  form: FormGroup | null;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getUsageForm();
  }

}
