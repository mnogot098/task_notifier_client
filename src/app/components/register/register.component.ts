import { Component } from '@angular/core';
import { User } from '../../models/User';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: User = new User();

  constructor(
    private authService: AuthService,
    private notifier: ToastrService
  ) {}

  register() {
    this.authService.register(this.user).subscribe(
      (res) => {
        this.notifier.success(res.message);
      },
      (err) => {
        this.notifier.error(err.error.message);
      }
    );
  }
}
