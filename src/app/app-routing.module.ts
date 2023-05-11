import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task-list', component: TaskListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
