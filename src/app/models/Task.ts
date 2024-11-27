class Task {
  task_id: number;
  description: string;
  due_date: Date;
  status: boolean;

  constructor() {
    this.task_id = 0;
    this.description = '';
    this.due_date = new Date();
    this.status = false;
  }
}
