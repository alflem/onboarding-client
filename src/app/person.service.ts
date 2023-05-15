import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  setPersonInactive(id: number): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}/inactive`, {});
  }

  addTask(personId: number, task: any[]): Observable<Person> {
    const url = `${this.apiUrl}/${personId}/tasks`;
    return this.http.post<Person>(url, task);
  }

  removeTask(personId: number, taskId: number): Observable<Person> {
    const url = `${this.apiUrl}/${personId}/tasks/${taskId}`;
    return this.http.delete<Person>(url);
  }
}
