import { Injectable } from '@angular/core';
import { globalConstants } from '../../common/global-constants';
import EmailModel from '../../components/shared/models/email';
import './../../../assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendMail(email: EmailModel) {
    Email.send({
      Host: globalConstants.emailConst.host,
      Username: globalConstants.emailConst.username,
      Password: globalConstants.emailConst.password,
      To: email.to,
      From: email.from,
      Subject: email.subject,
      Body: email.body,
    }).then(message => {
      alert(message);
    });
  }
}
