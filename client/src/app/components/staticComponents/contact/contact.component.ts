import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import './../../../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  playlistForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.playlistForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
        ]
      ],
    })
  }

  OnSubmit() {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'dim_kolev2002@abv.bg',
      Password: '199BE59E9F2F8E8B605DE45B87C98336AB7D',
      To: 'dim_kolev2002@abv.bg',
      From: 'dim_kolev2002@abv.bg',
      Subject : '',
      Body: '${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> ',
    }).then(message => {
      alert(message);
    });
  }
}
