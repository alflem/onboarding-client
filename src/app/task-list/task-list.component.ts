import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.interface';
import { TaskType } from '../models/task.interface';

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
  taskTypes = Object.values(TaskType).filter(
    (value) => typeof value === 'string'
  );
  constructor(private taskService: TaskService) {}

  fetchTasksByTaskType(taskType: string): void {
    this.allTasks = this.tasks.filter((t) => t.taskType === taskType);
  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.allTasks = tasks;
    });
  }

  filterTasksByTaskType(taskType: string) {
    this.tasks = this.allTasks.filter((task: Task) => task.taskType === taskType);
  }

  showStepDescription(description: string): void {
    alert(description);
  }
  

  getTotalProgress(): number {
    const totalSteps = this.tasks.reduce(
      (acc, task) => acc + this.tasks.length,
      0
    );
    const completedSteps = this.tasks.reduce(
      (acc, task) => acc + this.tasks.filter((step) => step.completed).length,
      0
    );

    return (completedSteps / totalSteps) * 100;
  }

  onCheckboxChange() {
    // Add your logic for handling the checkbox change event here
    console.log('Checkbox state changed');
  }

  checkAll() {
    this.selectAll = true;
    this.tasks.forEach((task) => {
      this.tasks.forEach((step) => (step.completed = true));
    });
  }

  uncheckAll() {
    this.selectAll = false;
    this.tasks.forEach((task) => {
      this.tasks.forEach((step) => (step.completed = false));
    });
  }

  getProgress(task: Task): number {
    if (task.steps) {
      const completedSteps = task.steps.filter((step) => step.completed).length;
      return (completedSteps / task.steps.length) * 100;
    } else {
      return 0;
    }
  }
}
