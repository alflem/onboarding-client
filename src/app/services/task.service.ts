import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.interface';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:HttpClient) {}

  getAllTasks (): Observable<Task[]> {
    let task:Observable<Task[]> = this.http.get<Task[]>('http://localhost:8080/api/tasks');
    return task;
  }
}
