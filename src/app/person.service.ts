// person.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './models/task.interface';





@Injectable({
  providedIn: 'root',
})
export class PersonService {
  
  public personsUrl = `${window.location.protocol}//${window.location.hostname}:8081`; // Replace with your Spring Boot server address and port
  

  constructor(private http: HttpClient) {}

 

  
getAllPersons(): Observable<Person[]> {
  return this.http.get<Person[]>(`${this.personsUrl}/persons`);
}

getPerson(id: number): Observable<Person> {
  return this.http.get<Person>(`${this.personsUrl}/person/${id}`);
}

  getPersons(): Observable<Person[]> {
    const url = `${this.personsUrl}/persons`;
    return this.http.get<Person[]>(url);
  }

  getActivePersons(): Observable<Person[]> {
    const url = `${this.personsUrl}/activePersons`;
    return this.http.get<Person[]>(url);
  }

  createPerson(person: Person): Observable<Person> {
    const url = `${this.personsUrl}/createPerson`;
    return this.http.post<Person>(url, person);
  }

  updatePerson(person: Person): Observable<Person> {
    const url = `${this.personsUrl}/updatePerson`;
    return this.http.post<Person>(url, person);
  }


  addTask(personId: number, task: any[]): Observable<Person> {
    const url = `${this.personsUrl}/${personId}/tasks`;
    return this.http.post<Person>(url, task);
  }

  removeTask(personId: number, taskId: number): Observable<Person> {
    const url = `${this.personsUrl}/${personId}/tasks/${taskId}`;
    return this.http.delete<Person>(url);
  }
}
