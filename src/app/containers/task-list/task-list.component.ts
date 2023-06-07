import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.interface';
import { TaskType } from 'src/app/models/task.interface';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/person.service';
import { Person } from 'src/app/models/task.interface';
import { SelectedPersonService } from 'src/app/services/selectedperson.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  TaskType = TaskType;
  selectAll: boolean = false;
  tasks: Task[] = [];
  allTasks: Task[] = [];
  selectedTaskType: string = '';
  person: Person | undefined;
  personId: string | undefined;

  taskTypes = Object.values(TaskType).filter(
    (value) => typeof value === 'string'
  );
  selectedPerson: Person | null = null;
  activePersons: Person[] = [];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private personService: PersonService,
    private selectedPersonService: SelectedPersonService
  ) {}

  ngOnInit(): void {
    const personId = this.selectedPersonService.getPersonId();
    if (!personId) {
      this.personId = this.getNewestPersonId().toString();
      console.log('PersonId:', this.personId);
    } else {
      this.personId = personId.toString();
      console.log('PersonId:', this.personId);
    }

    if(this.personId) {
      this.taskService.getTasksByPerson(+this.personId).subscribe((tasks: Task[]) => {
        this.tasks = tasks;
        this.allTasks = tasks;
        console.log('Alla tasks för personen:', this.tasks);
      });

      // Fetch the current selected person from the PersonService
      this.personService.getPerson(+this.personId).subscribe((person: Person) => {
        this.selectedPerson = person;
        console.log('SelectedPerson:', this.selectedPerson);
      });
    }
}

filterTasksByTaskType(taskType: string) {
    if(this.personId) {
      this.personService.getPerson(+this.personId).subscribe((person: Person) => {
        this.selectedPerson = person;
        if (this.selectedPerson) {
          this.taskService.getTasksByPersonAndType(this.selectedPerson.id, taskType).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
            if (this.selectedPerson) {
              this.selectedPerson.tasks = tasks; // update selectedPerson tasks
            }
            console.log('Specifika tasks efter TaskType:', this.tasks);
          });
        } else {
          console.log('selectedPerson is not defined');
        }
      });
    }
}


  getNewestPersonId(): string {
    // TODO: Implement this function properly
    return '1'; // Placeholder
  }

  onCheckboxChange() {
    // Add your logic for handling the checkbox change event here
    console.log('Checkbox state changed');
  }

  checkAll() {
    this.selectAll = true;
    this.tasks.forEach((task) => {});
  }

  uncheckAll() {
    this.selectAll = false;
    this.tasks.forEach((task) => {});
  }

  getProgress(task: Task): number {
    return 0;
  }
}
