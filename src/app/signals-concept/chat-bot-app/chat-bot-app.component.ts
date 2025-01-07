import { Component } from '@angular/core';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@Component({
  selector: 'app-chat-bot-app',
  imports: [ChatMessageComponent,ChatWindowComponent],
  templateUrl: './chat-bot-app.component.html',
  styleUrl: './chat-bot-app.component.css'
})
export class ChatBotAppComponent {

}
