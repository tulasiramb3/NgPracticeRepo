import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontestComponent } from './buttontest.component';

describe('ButtontestComponent', () => {
  let component: ButtontestComponent;
  let fixture: ComponentFixture<ButtontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtontestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
