import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesconceptsComponent } from './pipesconcepts.component';

describe('PipesconceptsComponent', () => {
  let component: PipesconceptsComponent;
  let fixture: ComponentFixture<PipesconceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesconceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesconceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
