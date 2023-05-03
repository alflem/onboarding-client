import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';
import { FlowerComponent } from './components/flower/flower.component';


@NgModule({
  declarations: [
     AppComponent,
     HomeComponent,
     TodoListComponent,
     TaskComponent,
     FlowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
