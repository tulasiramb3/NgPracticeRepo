import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientSampleComponent } from './httpclient-sample.component';

describe('HttpclientSampleComponent', () => {
  let component: HttpclientSampleComponent;
  let fixture: ComponentFixture<HttpclientSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpclientSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpclientSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
