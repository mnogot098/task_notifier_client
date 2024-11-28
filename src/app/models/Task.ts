export class Task {
  taskId: number;
  title: string;
  description: string;
  due_date: Date | null;
  taskStatus: number;
  userId: number;

  notificationMessage: string;
  //scheduledTime: Date | null;
  channelId: number;

  constructor() {
    this.taskId = 0;
    this.title = '';
    this.description = '';
    this.due_date = null;
    this.taskStatus = 0;
    this.userId = 0;

    this.notificationMessage = '';
    //this.scheduledTime = null;
    this.channelId = 0;
  }
}