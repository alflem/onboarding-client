// email.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = '/sendTaskHelpEmail';  // Update with your server's actual URL

  constructor(private http: HttpClient) { }

  sendTaskHelpEmail(task: Task, additionalInfo: string) {
    const emailDetails = {
      to: 'c6f69174.xlent.onmicrosoft.com@emea.teams.ms',  // Change this to the actual email recipient
      title: task.title,
      description: task.description,
      url: 'http://yourapp.com/task/' + task.id,  // Update this with the actual task URL
      additionalInfo: additionalInfo,
    };
    return this.http.post(this.url, emailDetails);
  }
}
