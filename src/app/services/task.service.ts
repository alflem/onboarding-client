import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  isFinished: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { title: 'Task 1', isFinished: false },
    { title: 'Task 2', isFinished: false },
    { title: 'Task 3', isFinished: false }
  ];

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t === task);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }
}
