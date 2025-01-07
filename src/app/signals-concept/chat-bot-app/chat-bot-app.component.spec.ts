import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotAppComponent } from './chat-bot-app.component';

describe('ChatBotAppComponent', () => {
  let component: ChatBotAppComponent;
  let fixture: ComponentFixture<ChatBotAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatBotAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBotAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
