import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TaskListPopupComponent } from '../../components/task-list-popup/task-list-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  openTaskListDialog(taskType: string): void {
    this.dialog.open(TaskListPopupComponent, {
      data: { taskType },
      width: '600px', // Set the desired width of the dialog
    });
  }
}
