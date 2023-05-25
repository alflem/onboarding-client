//task-list.component.ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.interface';
import { TaskType } from '../models/task.interface';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../models/task.interface';
import { map, pluck } from 'rxjs';

interface TaskView {
  title: string;
  id: number;
}

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
  selectedPerson: any = null; // assuming `any` is your `Person` type.
  activePersons: any[] = []; // assuming `any` is your `Person` type
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private personService: PersonService
    
    
    ) {
  }


  fetchTasksByTaskType(taskType: string): void {
    this.allTasks = this.tasks.filter((t) => t.taskType === taskType);
  }

  ngOnInit(): void {
    this.route.snapshot.params['personId']
    this.taskService.getAllTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.allTasks = tasks;
      
    });
  
  }

  filterTasksByTaskType(taskType: string) {
    this.tasks = this.allTasks.filter((task: Task) => task.taskType === taskType);
  }


  onCheckboxChange() {
    // Add your logic for handling the checkbox change event here
    console.log('Checkbox state changed');
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
