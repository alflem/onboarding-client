
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Petal } from 'src/app/containers/home/home.component';


@Component({
  selector: 'app-task-list-popup',
  templateUrl: './task-list-popup.component.html',
})
export class TaskListPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskListPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Petal
  ) {}
}

