import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.currentUser$.subscribe(user => this.currentUser = user);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
