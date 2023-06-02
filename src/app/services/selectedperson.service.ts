//selectedperson.service.ts
import { Injectable } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class SelectedPersonService {
  private personId: number = 0;
  private selectedPerson: Person | null = null;

  constructor(private personService: PersonService) {
    const storedPersonId = localStorage.getItem('personId');
    this.personId = storedPersonId ? Number(storedPersonId) : 0; // default to 0 if null
    console.log('StoredPersonId:', storedPersonId);
  }

  setPersonId(personId: number) {
    this.personId = personId;
    localStorage.setItem('personId', personId.toString()); // convert to string before storing
    console.log('SetPersonId:', personId);
    this.fetchAndStoreSelectedPerson(personId);
  }

  getPersonId(): number {
    if (!this.personId) {
      const storedPersonId = localStorage.getItem('personId');
      this.personId = storedPersonId ? Number(storedPersonId) : 0; // convert back to number when retrieving
      console.log('GetPersonId:', this.personId);
      this.fetchAndStoreSelectedPerson(this.personId);
    }
    return this.personId;
  }

  private fetchAndStoreSelectedPerson(personId: number): void {
    this.personService.getPerson(personId).subscribe((person: Person) => {
      this.selectedPerson = person;
      console.log('Fetched and stored selected person:', this.selectedPerson);
    });
  }

  getSelectedPerson(): Person | null {
    return this.selectedPerson;
  }
}
