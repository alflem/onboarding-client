import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonService } from '../../person.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  personsUrl!: string;

  constructor(private http: HttpClient, public personService: PersonService ) {}

  ngOnInit() {
    this.personsUrl = this.personService.personsUrl;
  }

  sendEmail() {
    const emailData = {
      to: 'recipient@example.com',
      title: 'Email Subject',
      description: 'Email Content',
      url: 'www.example.com',
      additionalInfo: 'Additional Info'
    };

    this.http.post(`${this.personsUrl}/sendTaskHelpEmail`, emailData).subscribe(
      response => {
        console.log('Email sent successfully');
      },
      error => {
        console.error('Failed to send email', error);
      }
    );
  }
}
