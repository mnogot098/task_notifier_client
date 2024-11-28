export class Notification {
  notification_id: number;
  user_id: number;
  task_id: number;
  status_id: number;
  channel_id: number;
  scheduled_time: Date | null;
  message: string;

  constructor() {
    this.notification_id = 0;
    this.user_id = 0;
    this.task_id = 0;
    this.status_id = 0;
    this.channel_id = 0;
    this.scheduled_time = null;
    this.message = '';
  }
}
