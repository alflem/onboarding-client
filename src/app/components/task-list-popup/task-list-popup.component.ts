import { useAnimation } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.interface';
import { ManageTasksComponent } from '../manage-tasks/manage-tasks.component';

@Component({
  selector: 'app-task-list-popup',
  templateUrl: './task-list-popup.component.html',
})
export class TaskListPopupComponent {
  constructor(
    private manageTasksComponent: ManageTasksComponent,
    public dialogRef: MatDialogRef<TaskListPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tasks: Task[], taskType: string } // Add taskType property
  ) {}
}

