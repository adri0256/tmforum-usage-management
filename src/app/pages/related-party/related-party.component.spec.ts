import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPartyComponent } from './related-party.component';

describe('RelatedPartyComponent', () => {
  let component: RelatedPartyComponent;
  let fixture: ComponentFixture<RelatedPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
