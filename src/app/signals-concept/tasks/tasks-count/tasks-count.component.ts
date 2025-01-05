import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-tasks-count',
  imports: [],
  templateUrl: './tasks-count.component.html',
  styleUrl: './tasks-count.component.css'
})
export class TasksCountComponent implements OnInit{

  taskService = inject(TaskService);
  count : number = 0;
  ngOnInit(): void {
    
  }

  getTasks(){
    return this.count = this.taskService.getTasks()().length;
  }

}
