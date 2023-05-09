import { Component } from '@angular/core';
import { FlowerComponent } from './components/flower/flower.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onboarding-client';
  showFlower = true;
  isDarkMode = false;

  constructor(
    private router: Router,
    public themeService: ThemeService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showFlower = event.url === '/' || event.url === '';
      });
  }

  showFlowerComponent() {
    return this.showFlower;
  }
}