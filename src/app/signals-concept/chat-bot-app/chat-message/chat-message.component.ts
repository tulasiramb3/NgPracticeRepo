import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-chat-message',
  imports: [FormsModule],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  message: string='';
  chatService = inject(ChatService);

  send(){
    console.log(this.message);
    this.chatService.sendMessage("You",this.message)
    this.message="";
  }
}
