import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormHandlingComponent } from './basic-form-handling.component';

describe('BasicFormHandlingComponent', () => {
  let component: BasicFormHandlingComponent;
  let fixture: ComponentFixture<BasicFormHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicFormHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicFormHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
