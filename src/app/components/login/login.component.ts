import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Auth } from '../../models/Auth';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: Auth = new Auth();

  constructor(
    private authService: AuthService,
    private notifier: ToastrService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.login(this.user).subscribe(
      (res) => {
        this.authService.setAuthToken(res.user);
        
        this.authService.updateLoggedInStatus(true);
        
        this.router.navigate(['/tasks']);
      },
      (err) => {
        this.notifier.error(err.error.message);
      }
    );
  }
}
