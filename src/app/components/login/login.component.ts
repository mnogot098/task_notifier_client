import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Auth } from '../../models/Auth';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: Auth = new Auth();

  constructor(private authService: AuthService, private notifier: ToastrService) {}

  onSubmit(): void {
    this.authService.login(this.user).subscribe(
      (res) => {
        this.notifier.success(res.message);
      },
      (err) => {
        this.notifier.error(err.error.message);
      }
    );
  }
}
