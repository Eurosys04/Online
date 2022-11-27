import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../../core/services/email.service.js';
import EmailModel from '../../shared/models/email.js';
import './../../../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private emailService: EmailService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [
        null,
        [
        ]
      ],
      to: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      subject: [
        null,
        [
          Validators.required,
        ]
      ],
      body: [
        null,
        [
          Validators.required,
        ]
      ],
    })
  }

  OnSubmit() {
    let email: EmailModel = this.contactForm.value;
    email.from = "dim_kolev2002@abv.bg";
    this.emailService.sendMail(email);

    //Email.send({
    //  Host: 'smtp.elasticemail.com',
    //  Username: 'dim_kolev2002@abv.bg',
    //  Password: '199BE59E9F2F8E8B605DE45B87C98336AB7D',
    //  To: 'dim_kolev2002@abv.bg',
    //  From: 'dim_kolev2002@abv.bg',
    //  Subject : '',
    //  Body: '${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> ',
    //}).then(message => {
    //  alert(message);
    //});
  }

  get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  get to(): AbstractControl {
    return this.contactForm.get('to');
  }

  get subject(): AbstractControl {
    return this.contactForm.get('subject');
  }

  get body(): AbstractControl {
    return this.contactForm.get('body');
  }

}
