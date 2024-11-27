import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CalendarModule, DatePipe, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  @Input() data: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    console.log(this.data.taskStatus.statusId);
    
    this.data['dueDate'] = this.datePipe.transform(
      this.data['dueDate'],
      'yyyy-MM-dd'
    );
  }
}
