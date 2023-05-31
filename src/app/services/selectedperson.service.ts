import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedPersonService {
    private personId: string = '';

    constructor() {
        this.personId = localStorage.getItem('personId') || '';
        const storedPersonId = localStorage.getItem('personId');
      }
      

  setPersonId(personId: string) {
    this.personId = personId;
    localStorage.setItem('personId', personId); // Optional: Store in local storage
  }

  getPersonId(): string {
    if (!this.personId) {
        this.personId = localStorage.getItem('personId') || '';

    }
    return this.personId;
  }
}
