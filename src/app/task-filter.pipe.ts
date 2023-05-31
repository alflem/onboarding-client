import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './models/task.interface';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: any[], completed: boolean): any[] {
    return tasks.filter((task) => task.completed === completed);
  }
}
