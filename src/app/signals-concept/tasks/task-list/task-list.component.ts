import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task';
import { TasksCountComponent } from '../tasks-count/tasks-count.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-list',
  imports: [TasksCountComponent, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  taskDescription: string = '';
  taskList: Task[] = [];

  constructor(private taskService:TaskService) {
    
  }
  
  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.taskList = this.taskService.getTasks()();
  }

  addTask() {
    const maxTaskId = this.taskList.length>0 ? Math.max(...this.taskList?.map(m => m.id)): 0;
    let newTask: Task = {
      description: this.taskDescription,
      id: maxTaskId + 1
    }
    console.log(newTask);    
    this.taskService.addTask(newTask);
    this.taskDescription="";
    this.getTasks();
  }

  removeTask(taskId: number){    
    this.taskService.removeTask(taskId); 
    this.getTasks();
  }
}
