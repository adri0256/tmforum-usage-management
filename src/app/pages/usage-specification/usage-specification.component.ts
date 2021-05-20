import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usage-specification',
  templateUrl: './usage-specification.component.html',
  styleUrls: ['./usage-specification.component.scss']
})
export class UsageSpecificationComponent implements OnInit {
  @Input() form: FormGroup | null = null;
  @Input() formArrayIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
