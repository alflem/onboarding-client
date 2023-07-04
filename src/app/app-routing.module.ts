import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './containers/home-flower/home.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin-page', component: AdminPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
