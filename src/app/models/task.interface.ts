export interface Task {
    title: string;
    id:number;
    taskType: string;
    url: string;
    completed: boolean;
    description: string; 
    steps:any[];
  
}   

export enum TaskType {
    BEFORE_START,
    AFTER_START_BUDDY,
    AFTER_START_RECRUIT,
  }

  export interface Person {
    id: number;
    name: string;
    age: number;
    email: string;
    tasks: any[];
    active: boolean;
  }
  