import { Component, Input } from '@angular/core';
import { Petal } from 'src/app/containers/home/home.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskListPopupComponent } from '../task-list-popup/task-list-popup.component';
import { AppComponent } from 'src/app/app.component';
import { WelcomePopupComponent } from '../welcome-popup/welcome-popup.component';

@Component({
  selector: 'app-petal',
  template: `
    <div class="petal" (click)="openTaskListDialog()">
      <!-- Basic petal visual -->
    </div>
  `,
  styleUrls: ['./petal.component.css']
})
export class PetalComponent {
  @Input() petal: Petal = { description: '', imageUrl: '', url: '' }; // Provide a default value

  constructor(private dialog: MatDialog, private appComponent: AppComponent) {}

  openTaskListDialog(): void {
    // Stäng välkomstdialogen om den är öppen
    if (this.appComponent.welcomeDialogRef) {
        this.appComponent.welcomeDialogRef.close();
    }

    // Öppna TaskListPopupComponent som vanligt
    this.dialog.open(TaskListPopupComponent, {
        data: this.petal,
        width: '600px',
        height: '600px',
    });
}
} 