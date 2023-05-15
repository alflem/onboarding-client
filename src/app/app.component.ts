import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';
import { PersonService } from './person.service';
import { Person } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'onboarding-client';
  showFlower = true;
  isDarkMode = false;
  persons: Person[] = [];
  newPerson: Person = { id: 0, name: '', age: 0, email: '', tasks: [], active: true };


  constructor(
    private router: Router,
    public themeService: ThemeService,
    private personService: PersonService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showFlower = event.url === '/' || event.url === '';
      });
  }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe((persons) => {
      this.persons = persons;
    });
  }

  createPerson(person: Person): void {
    this.personService.createPerson(person).subscribe((newPerson) => {
      this.persons.push(newPerson);
    });
  }

  setPersonInactive(id: number): void {
    const personIndex = this.persons.findIndex((person) => person.id === id);
    if (personIndex !== -1) {
      this.persons[personIndex].active = false;
    }
  }

  setPersonActive(id: number): void {
    const personIndex = this.persons.findIndex((person) => person.id === id);
    if (personIndex !== -1) {
      this.persons[personIndex].active = true;
    }
  }

  showFlowerComponent() {
    return this.showFlower;
  }
}
