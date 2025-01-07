import { Injectable, signal } from '@angular/core';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatMessages = signal<{sender: string, message:string, timeStamp:string}[]>([])
  constructor() { }

  getMessages(){
    return this.chatMessages;
  }
  sendMessage(sender:string, text:string){
    let time = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})
    let newMessage = {sender , message:text, timeStamp:time}
    this.chatMessages.update((cmessages)=>[...cmessages,newMessage])

    if(sender =='You'){
      setTimeout(() => {
        this.triggerBotMessage()
      }, 2000); 
    }
  }
  triggerBotMessage(){
    let botMessages = ['Hi','How are you','What can i help you with','Thank you','Glad to help you','Certainly']

    const message = botMessages[Math.floor(Math.random()* botMessages.length)];

    this.sendMessage('bot',message);

  }
}
