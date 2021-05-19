import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatedProductUsageComponent } from './rated-product-usage.component';


describe('RatedPorductUsageComponent', () => {
  let component: RatedProductUsageComponent;
  let fixture: ComponentFixture<RatedProductUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatedProductUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedProductUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
