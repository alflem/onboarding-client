//task.service.ts
//Purpose: To provide a service for the Task model
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.interface';
import { PersonService } from '../person.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient, private personService: PersonService) {}

  getTasksByPerson (personId: number): Observable<Task[]> {
    let tasks: Observable<Task[]> = this.http.get<Task[]>(`${this.personService.personsUrl}/person/${personId}/tasks`);
    return tasks;
  }

  getTasksByPersonId(personId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.personService.personsUrl}/person/${personId}/tasks`);
  }

  getTasksByPersonAndType(personId: number, taskType: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.personService.personsUrl}/person/${personId}/tasks/${taskType}`);
  }
}

