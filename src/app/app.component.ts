import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarModule,
    AvatarModule,
    BadgeModule,
    AutoCompleteModule,
    ButtonModule,
    SidebarModule,
    CalendarModule,
    DropdownModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  username: string | null = '';
  selectedAction: any;
  isLoggedIn = false;
  selectedItem: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentLoggedInStatus.subscribe((value) => {
      this.isLoggedIn = value;
      if (this.isLoggedIn) {
        this.username = JSON.parse(
          localStorage.getItem('user') || '{}'
        ).username;
      } else {
        this.username = null;
      }
    });

    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.updateLoggedInStatus(true);
    } else {
      this.authService.updateLoggedInStatus(false);
    }
  }

  logout() {
    this.authService.setAuthToken(null);
    this.authService.updateLoggedInStatus(false);
    this.router.navigate(['/login']);
  }
}
