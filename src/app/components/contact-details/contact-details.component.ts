import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
    this.contact.id = 1;
    this.contact.firstname = "Sasha";
    this.contact.lastname = "Dykun";
    this.contact.email = "sasha@sasha.com";
    this.contact.phone = "1773-742-3333";
    this.contact.gender = "Male";
    this.contact.city = "Irvine";
    this.contact.state = "Ca";
    this.contact.country = "US";
    this.contact.dob = "1988-01-05"
  }

}
