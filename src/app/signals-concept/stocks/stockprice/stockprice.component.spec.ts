import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpriceComponent } from './stockprice.component';

describe('StockpriceComponent', () => {
  let component: StockpriceComponent;
  let fixture: ComponentFixture<StockpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockpriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
