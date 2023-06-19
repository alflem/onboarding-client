//task-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.interface';
import { TaskType } from 'src/app/models/task.interface';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/person.service';
import { Person } from 'src/app/models/task.interface';
import { SelectedPersonService } from 'src/app/services/selectedperson.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
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
  newTask: Task = { title: '', description: '', taskType: this.selectedTaskType, completed: false, active: true, url: '' };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private personService: PersonService,
    private selectedPersonService: SelectedPersonService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.selectedPersonService.getPersonId().pipe(takeUntil(this.ngUnsubscribe)).subscribe(personId => {
      this.personId = personId;
      console.log('PersonId:', this.personId);
  
      if(this.personId) {
        this.taskService.getTasksByPerson(+this.personId).pipe(takeUntil(this.ngUnsubscribe)).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
          this.allTasks = tasks;
          console.log('Alla tasks för personen:', this.tasks);
        });
  
        this.personService.getPerson(+this.personId).pipe(takeUntil(this.ngUnsubscribe)).subscribe((person: Person) => {
          this.selectedPerson = person;
          console.log('SelectedPerson:', this.selectedPerson);
          this.cdr.detectChanges();
        });
      }
    });
  }
  

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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

createTask() {
  if (this.selectedPerson && this.selectedTaskType) {
    this.taskService.createTask(this.selectedPerson.id, this.selectedTaskType, this.newTask)
      .subscribe((task: Task) => {
        console.log("Created task:", task);  // Add this line to print the created task
        this.selectedPerson?.tasks.push(task);
        this.newTask = { title: '', description: '', taskType: this.selectedTaskType, completed: false, active: true, url: '' };
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
  deleteTask(personId: number, taskId: number): void {
    this.taskService.deleteTask(personId, taskId).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      console.log('Deleted task with id:', taskId);
      
    });
  } 
}
