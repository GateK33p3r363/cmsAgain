import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  @ViewChild('subject') subjectInput!: ElementRef;
  @ViewChild('msgText') msgTextInput!: ElementRef;

  //newMessage: Message = { id: 0, content: '' }

  constructor(private messageService: MessageService) {}

  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender: string = 'We Learn CMS';

  onSendMessage() {
    // Get the values from the input elements
    //const subject = this.subjectInput.nativeElement.value;
    const msgText = this.msgTextInput.nativeElement.value;

     // Create a new Message object
    //const newMessage = new Message(
    //  subject,
    //  msgText,
    //  this.currentSender
    //);

    // Emit the new Message object
    //this.addMessageEvent.emit(newMessage);
    
    
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';

    //this.messageService.addMessage(this.newMessage);
    //this.newMessage = { id: 0, content: '' };
  }

  onClear() {
    // Clear the values of the subject and msgText input elements
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
