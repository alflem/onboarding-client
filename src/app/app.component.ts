//app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';
import { PersonService } from './person.service';
import { TaskService } from './services/task.service';
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
  newPerson: Person = { id: 0, name: '', email: '', tasks: [], active: true };
  activePersons: Person[] = []
  selectedPerson: Person | null = null;
  selectedTaskType: string | null = null;




  constructor(
    private router: Router,
    public themeService: ThemeService,
    private personService: PersonService,
    private taskService: TaskService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showFlower = event.url === '/' || event.url === '';
      });
  }

 // In your Angular component
ngOnInit(): void {
  this.personService.getActivePersons().subscribe((persons) => {
    this.activePersons = persons;
  });
  
}


getPersonTasks(personId: number, taskType: string) {
  this.taskService.getTasksByPersonAndType(personId, taskType)
      .subscribe(tasks => this.selectedPerson ? this.selectedPerson.tasks = tasks : null);
}



filterTasksByTaskType(taskType: string) {
  if(this.selectedPerson){
      this.getPersonTasks(this.selectedPerson.id, taskType);
  }
}


  getActivePersons(): void {
    this.personService.getActivePersons().subscribe((persons) => {
      this.activePersons = persons;
    });
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
  addTask(personId: number, task: any[]): void {
    this.personService.addTask(personId, task).subscribe((updatedPerson) => {
      const personIndex = this.persons.findIndex((person) => person.id === updatedPerson.id);
      this.persons[personIndex] = updatedPerson;
    });
  }

  removeTask(personId: number, taskId: number): void {
    this.personService.removeTask(personId, taskId).subscribe((updatedPerson) => {
      const personIndex = this.persons.findIndex((person) => person.id === updatedPerson.id);
      this.persons[personIndex] = updatedPerson;
    });
  }
  goToPersonTasks(personId: number): void {
    this.router.navigate(['/task-list', personId]);
  }
  
}
