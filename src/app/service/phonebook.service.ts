import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor() { }

  getContactDetails(id: number ): Contact {
    let contact = new Contact();
    contact.id = 1;
    contact.firstname = "Sasha";
    contact.lastname = "Dykun";
    contact.email = "sasha@sasha.com";
    contact.phone = "1773-742-3333";
    contact.gender = "Male";
    contact.city = "Irvine";
    contact.state = "Ca";
    contact.country = "US";
    contact.dob = "1988-01-05"
    return contact;
  }
  
}
