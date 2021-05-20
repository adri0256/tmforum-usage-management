import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageCharacteristicComponent } from './usage-characteristic.component';

describe('UsageCharacteristicComponent', () => {
  let component: UsageCharacteristicComponent;
  let fixture: ComponentFixture<UsageCharacteristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageCharacteristicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
