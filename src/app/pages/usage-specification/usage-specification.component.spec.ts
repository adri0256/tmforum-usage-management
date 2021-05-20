import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageSpecificationComponent } from './usage-specification.component';

describe('UsageSpecificationComponent', () => {
  let component: UsageSpecificationComponent;
  let fixture: ComponentFixture<UsageSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
