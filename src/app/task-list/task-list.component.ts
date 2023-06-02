//task-list.component.ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.interface';
import { TaskType } from '../models/task.interface';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../models/task.interface';
import { SelectedPersonService } from '../services/selectedperson.service';



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
  activePersons: any[] = []; // assuming `any` is your `Person` type
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private personService: PersonService,
    private selectedPersonService: SelectedPersonService
    
    
    ) {
  }


  fetchTasksByTaskType(taskType: string): void {
    this.allTasks = this.tasks.filter((t) => t.taskType === taskType);
  }

  ngOnInit(): void {
    this.route.snapshot.params['personId'];
    let personId = this.selectedPersonService.getPersonId();
    if (!personId) {
      personId = Number(this.getNewestPersonId());
      console.log('PersonId:', personId);
    }
    this.taskService.getTasksByPerson(+personId).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.allTasks = tasks;
      console.log('Alla tasks för personen:', this.tasks);
    });
  
    // Fetch the current selected person from the SelectedPersonService
    this.selectedPerson = this.selectedPersonService.getSelectedPerson();
    console.log('SelectedPerson:', this.selectedPerson);
  }
  
  



  filterTasksByTaskType(taskType: string) {
    this.selectedPerson = this.selectedPersonService.getSelectedPerson();
    if (this.selectedPerson) {
      this.taskService.getTasksByPersonAndType(this.selectedPerson.id, taskType)
        .subscribe((tasks: Task[]) => {
          this.tasks = tasks;
          if (this.selectedPerson) {
            this.selectedPerson.tasks = tasks; // update selectedPerson tasks
          }
          console.log('Specifika tasks efter TaskType:', this.tasks);
        });
    } else {
      console.log('selectedPerson is not defined');
    }
  }
  
  
  getNewestPersonId(): string {
    // TODO: Implement this function properly
    return '1'; // Placeholder
  }
  
  onCheckboxChange() {
    // Add your logic for handling the checkbox change event here
    console.log('Checkbox state changed'); // Remove this line
  }

  checkAll() {
    this.selectAll = true;
    this.tasks.forEach((task) => {
      
    });
  }

  uncheckAll() {
    this.selectAll = false;
    this.tasks.forEach((task) => {
    });
  }

  getProgress(task: Task): number {
    return 0;
      
    
  }
}
