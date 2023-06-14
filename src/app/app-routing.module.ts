import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TaskListComponent } from './containers/task-list/task-list.component';
import { HomeComponent } from './containers/home/home.component';
import { AddPersonComponent } from './containers/add-person/add-person.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'add-person', component: AddPersonComponent },
  { path: 'BEFORE_START', component: TaskListComponent }
 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
