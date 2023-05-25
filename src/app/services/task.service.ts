//task.service.ts
//Purpose: To provide a service for the Task model
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
    let task:Observable<Task[]> = this.http.get<Task[]>('http://localhost:8081/api/tasks');
    return task;
  }

  getTasksByTaskType(taskType: string): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:8081/api/tasks/tasks?taskType=${taskType}`);


  }

  getTasksByPersonId(personId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:8081/person/${personId}`);
  }
  
}
