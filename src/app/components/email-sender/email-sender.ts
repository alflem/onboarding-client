//email.component.ts
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-email',
  templateUrl: './email-sender.html',
  styleUrls: ['./email-sender.css']
})
export class MailComponent implements OnInit {
  task: Task = {
    title: 'Task Title',
    taskType: 'Task Type',
    completed: false,
    description: 'Task Description',
    active: true
  };



  constructor(private emailService: EmailService) { }
  

  ngOnInit(): void {

  }

  sendHelpEmail() {
    const additionalInfo = 'This is some additional information.';
    this.emailService.sendTaskHelpEmail(this.task, additionalInfo)
      .subscribe(response => {
        console.log('Email sent!', response);
      }, error => {
        console.error('Failed to send email:', error);
      });
  }

}