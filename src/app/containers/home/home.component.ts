import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



// inside the class
constructor(private router: Router) { }

navigateTo(path: string) {
  this.router.navigate([path]);
}


}
