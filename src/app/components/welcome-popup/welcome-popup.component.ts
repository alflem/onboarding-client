import { Component, Input,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-welcome-popup',
  templateUrl: './welcome-popup.component.html',
  styleUrls: ['./welcome-popup.component.css']
})

export class WelcomePopupComponent {
  @Input() personName: string = '';


constructor(
  public dialogRef: MatDialogRef<WelcomePopupComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {
  console.log('Received data:', data);
}
}