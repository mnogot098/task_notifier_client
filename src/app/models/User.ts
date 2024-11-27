export class User {
  user_id: number;
  email: string;
  password: string;
  username: string;
  phone_number: string;

  constructor() {
    this.user_id=0;
    this.email='';
    this.password='';
    this.username='';
    this.phone_number='';
  }
}
