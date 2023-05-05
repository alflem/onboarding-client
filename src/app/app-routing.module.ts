import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerComponent } from './components/flower/flower.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: FlowerComponent },
  { path: 'todo-list', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
