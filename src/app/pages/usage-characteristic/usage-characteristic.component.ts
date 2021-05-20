import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usage-characteristic',
  templateUrl: './usage-characteristic.component.html',
  styleUrls: ['./usage-characteristic.component.scss']
})
export class UsageCharacteristicComponent implements OnInit {
  @Input() form: FormGroup | null = null;
  @Input() formArrayIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
