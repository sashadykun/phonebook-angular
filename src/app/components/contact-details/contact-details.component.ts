import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { PhonebookService } from 'src/app/service/phonebook.service';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor( ) { }

  ngOnInit() {
    let service = new PhonebookService();
    this.contact = service.getContactDetails(1);
  }

}
