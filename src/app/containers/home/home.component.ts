import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TaskListPopupComponent } from '../../components/task-list-popup/task-list-popup.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isInfoVisible = false;
  infoTitle = '';
  infoText = '';
  infoImage = '';
  infoUrl = '';
  



  

  constructor(public appComponent: AppComponent, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  openTaskListDialog(title: string, description: string, imageUrl: string, url: string): void {
    const dialogRef = this.dialog.open(TaskListPopupComponent, {
      width: '600px',
      data: { title, description, imageUrl, url },
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed if needed
    });
  }

  
}
