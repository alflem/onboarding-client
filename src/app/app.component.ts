//app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';
import { PersonService } from './person.service';
import { TaskService } from './services/task.service';
import { Person } from './models/task.interface';
import { SelectedPersonService } from './services/selectedperson.service';
import { ChangeDetectorRef } from '@angular/core';
import { TaskListPopupComponent } from './components/task-list-popup/task-list-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { CommunicationService } from './services/CommunicationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'onboarding-xlu';
  showFlower = true;
  isDarkMode = false;
  persons: Person[] = [];
  newPerson: Person = { id: 0, name: '', email: '', tasks: [], active: true };
  activePersons: Person[] = [];
  selectedPerson: Person | null = null;
  selectedTaskType = '';
  tasks = [];
  welcomeMessageVisible = true; 


  constructor(
    private router: Router,
    public themeService: ThemeService,
    private personService: PersonService,
    private taskService: TaskService,
    private selectedPersonService: SelectedPersonService,
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog,
    private communicationService: CommunicationService
  ) {
    communicationService.changeEmitted$.subscribe((data) => {
      // here fetch data from the session storage
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showFlower = event.url === '/' || event.url === '';
      });
  }

  openTaskListPopup(): void {
    const dialogRef = this.dialog.open(TaskListPopupComponent, {
      width: '500px',
      data: { tasks: this.tasks, taskType: this.selectedTaskType }, // Pass both tasks and taskType to the popup
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the popup is closed if needed
    });
  }

  // In your Angular component
  ngOnInit(): void {
    this.personService.getActivePersons().subscribe((persons) => {
      this.activePersons = persons;
    });
  }

  onPersonSelected(personId: number) {
    console.log('onPersonSelected:', personId);
    this.selectedPersonService.setPersonId(personId.toString());
  
    // Fetch the selected person details
    this.personService.getPerson(personId).subscribe((person) => {
      this.selectedPerson = person;
      this.getPersonTasks(
        personId,
        this.selectedTaskType ? this.selectedTaskType : 'BLOMBLAD_1'
      );
      
    });
  }
  

  getPersonTasks(personId: number, taskType: string) {
    this.taskService
      .getTasksByPersonAndType(personId, taskType)
      .subscribe((tasks) => {
        if (this.selectedPerson) {
          this.selectedPerson.tasks = tasks;
          console.log(
            'Fetched tasks for selected person:',
            this.selectedPerson
          );
        } else {
          console.error('selectedPerson is not set');
        }
      });
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
    this.personService.deactivatePerson(id).subscribe((updatedPerson) => {
      const personIndex = this.persons.findIndex(
        (person) => person.id === updatedPerson.id
      );
      this.persons[personIndex] = updatedPerson;
      this.personService.refreshActivePersons();
      this.changeDetector.detectChanges(); // manually trigger change detection
    });
  }

  setPersonActive(id: number): void {
    this.personService.activatePerson(id).subscribe((updatedPerson) => {
      const personIndex = this.persons.findIndex(
        (person) => person.id === updatedPerson.id
      );
      this.persons[personIndex] = updatedPerson;
      this.personService.refreshActivePersons();
      this.changeDetector.detectChanges(); // manually trigger change detection
    });
  }

  showFlowerComponent() {
    return this.showFlower;
  }
  addTask(personId: number, task: any[]): void {
    this.personService.addTask(personId, task).subscribe((updatedPerson) => {
      const personIndex = this.persons.findIndex(
        (person) => person.id === updatedPerson.id
      );
      this.persons[personIndex] = updatedPerson;
    });
  }

  removeTask(personId: number, taskId: number): void {
    this.personService
      .removeTask(personId, taskId)
      .subscribe((updatedPerson) => {
        const personIndex = this.persons.findIndex(
          (person) => person.id === updatedPerson.id
        );
        this.persons[personIndex] = updatedPerson;
      });
  }
 
}
