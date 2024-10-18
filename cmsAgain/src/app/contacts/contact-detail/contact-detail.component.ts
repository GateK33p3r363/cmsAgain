import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact-list/contact-list.component'; 

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  //@Input() contact!: Contact;
  contact!: Contact; 

  constructor() {}

  ngOnInit(): void {
    // Initialize the contact variable or fetch data here
  }
}
