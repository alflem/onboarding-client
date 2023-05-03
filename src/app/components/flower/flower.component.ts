import { Component } from '@angular/core';

@Component({
  selector: 'app-flower',
  template: `
    <div class="flower">
      <div class="petal-container">
        <a routerLink="/todo-list" class="petal">To-Do List</a>
        <!-- Add more petals with routerLink as needed -->
      </div>
      <div class="center">XLU Onboarding</div>
    </div>
  `,
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent { }
