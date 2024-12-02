import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';
import { Notification } from '../../models/Notification';
import { ChannelService } from '../../services/channel.service';
import { Channel } from '../../models/Channel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { dateGreaterThanCurrent } from '../../utils';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  channels: Channel[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private channelService: ChannelService
  ) {
    this.taskForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      due_date: new FormControl(null, [Validators.required]),
      message: new FormControl('', Validators.required),
      channel_id: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.getAllChannels();
    
    
  }

  getAllChannels() {
    this.channelService.getAllChannels().subscribe(
      (res) => {
          this.channels = res.channels;
      },
      (error) => {
        console.error('Error fetching channels:', error);
      }
    );
  }

  create() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value;
      console.log("Task data:", task);
    } else {
      alert('form not valid');
    }    
  }
}