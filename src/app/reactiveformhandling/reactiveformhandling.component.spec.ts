import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformhandlingComponent } from './reactiveformhandling.component';

describe('ReactiveformhandlingComponent', () => {
  let component: ReactiveformhandlingComponent;
  let fixture: ComponentFixture<ReactiveformhandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveformhandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformhandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
