import { Component } from '@angular/core';
import { ChatService } from '../../chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-window',
  imports: [CommonModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {

 
  constructor(private chatService : ChatService) {
  
  }

  getMessages(){
    console.log(this.chatService.getMessages()())
    return this.chatService.getMessages()();
  }

}
