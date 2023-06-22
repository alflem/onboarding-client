//task.interface.ts
export interface Task {
    title: string;
    id?:number;
    taskType: string;
    url?: string;
    completed: boolean;
    description: string; 
    active: boolean;
    person_id?: BigInt;
}   

export enum TaskType {
    BEFORE_START,
    AFTER_START_BUDDY,
    AFTER_START_RECRUIT,
  }

  export interface Person {
    id: number;
    name: string;
    email: string;
    tasks: any[];
    active: boolean;
  
  }

  export interface TaskEmail {
    to: string;
    title: string;
    description: string;
    url: string;
    additionalInfo: string;
  }
  
  