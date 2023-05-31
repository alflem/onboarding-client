import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { HomeComponent } from './containers/home/home.component';
import { AddPersonComponent } from './add-person/add-person.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'add-person', component: AddPersonComponent },
  { path: 'task-list/:personId', component: TaskListComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
