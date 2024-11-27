import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css',
})
export class ListTasksComponent implements OnInit {
  tasks: any[] = [];
  user: any = null;

  constructor(private taskService: TaskService) {}

  async ngOnInit() {
    const storedUser = window.localStorage.getItem('user');

    if (storedUser) {
      this.user = JSON.parse(storedUser);

      this.getTasksByUser();
    }
  }

  getTasksByUser() {
    this.taskService.getTasksByUser(this.user.userId).subscribe(
      (res) => {
        this.tasks = res.tasks;
      },
      (err) => {
        
      }
    );
  }
}
