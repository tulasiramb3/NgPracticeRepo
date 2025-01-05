import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 tasks = signal<Task[]>([]);
  constructor() { }

  getTasks(){
    return this.tasks;
  }

  addTask(task: Task){
    this.tasks.set([...this.tasks(),task]);
  }

  removeTask(taskid:number){   
    var updatedTasks = this.tasks().filter(m=>m.id!==taskid);   
    this.tasks.set(updatedTasks);
  }

}
