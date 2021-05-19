import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-related-party',
  templateUrl: './related-party.component.html',
  styleUrls: ['./related-party.component.scss']
})
export class RelatedPartyComponent implements OnInit {
  @Input() form: FormGroup | null = null;
  @Input() formArrayIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
