import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/CommunicationService';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="login()">Login</button>
  `,
})
export class LoginComponent {
  constructor(private communicationService: CommunicationService) {}

  login() {
    const data = 'Some data to emit';
    this.communicationService.emitChange(data);
  }
}
