import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: User = new User();

  constructor(
    private authService: AuthService,
    private notifier: ToastrService,
    private router: Router
  ) {}

  register() {
    this.authService.register(this.user).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.notifier.error(err.error.message);
      }
    );
  }
}
