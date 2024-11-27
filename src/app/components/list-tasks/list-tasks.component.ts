import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})
export class ListTasksComponent implements OnInit{

  tasks:any[]= [];

  constructor(private taskService:TaskService) {}
 
  async ngOnInit() {
    this.getAllTasks();
  }


  getAllTasks() {
    this.taskService.getAllTasks().subscribe((res) => {
      this.tasks = res.tasks;
    },
  (err) => {
  })
  }
}
