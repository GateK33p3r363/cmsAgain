import { Component, Output, OnInit, EventEmitter } from '@angular/core';
//import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  group: string | null;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [];
  //constrictor(private contactService: ContactService){}
  
  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    //this.contacts = this.contactService.getContacts();
  }

  onSelected(contact: Contact) {
    //this.selectedContactEvent.emit(contact);
    //this.contactSevice.contactSelectedEven.emit(contact);
  }

  createNewContact() {
    // Logic for creating a new contact goes here
    console.log('Create new contact clicked');
  }
}
