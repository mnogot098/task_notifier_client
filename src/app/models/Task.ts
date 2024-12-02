export class Task {
  task_id: number;
  description: string;
  due_date: Date | null;
  title:string;
  status_id:number;
  user_id:number;

  constructor() {
    this.task_id = 0;
    this.description = '';
    this.due_date = null;
    this.status_id = 0;
    this.title = '';
    this.user_id = 0;
  }
}