import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task as TaskTemp } from '../models/task.interface';
import { Observable } from 'rxjs';

interface Task {
  title: string;
  steps: Step[];
}

interface Step {
  name: string;
  completed: boolean;
  url: string;
}


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  selectAll: boolean = false;
  constructor(private taskService:TaskService) {}
  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((data:TaskTemp[]) => {
      let tasks = data;
    });
  }

  getTotalProgress(): number {
    const totalSteps = this.tasks.reduce((acc, task) => acc + task.steps.length, 0);
    const completedSteps = this.tasks.reduce((acc, task) => acc + task.steps.filter(step => step.completed).length, 0);
  
    return (completedSteps / totalSteps) * 100;
  }
  

  onCheckboxChange() {
    // Add your logic for handling the checkbox change event here
    console.log('Checkbox state changed');
  }
  checkAll() {
    this.selectAll = true;
    this.tasks.forEach(task => {
      task.steps.forEach(step => step.completed = true);
    });
  }
  
  uncheckAll() {
    this.selectAll = false;
    this.tasks.forEach(task => {
      task.steps.forEach(step => step.completed = false);
    });
  }
  tasks: Task[] = [
    {
      title: 'Task 1',
      steps: [
        { name: 'Step 1', completed: false, url: 'https://www.aftonbladet.se' },
        { name: 'Step 2', completed: false, url: 'https://example.com/step2' },
      ],
    },
    {
      title: 'Task 2',
      steps: [
        { name: 'Step 1', completed: false, url: 'https://example.com/step1' },
        { name: 'Step 2', completed: false, url: 'https://example.com/step2' },
      ],
    },
  ];

  

  

  getProgress(task: Task): number {
    const completedSteps = task.steps.filter((step) => step.completed).length;
    return (completedSteps / task.steps.length) * 100;
  }
}
