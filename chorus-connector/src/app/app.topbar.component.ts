import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    isLoggedIn = false; // Replace with actual login status from your auth service

    constructor(private authService: AuthService,  private router: Router) {
      this.isLoggedIn = this.authService.isAuthenticated();
    }

    logout() {
      this.authService.logout();
      this.isLoggedIn = false;
      this.router.navigate([''])
    }
    navigateToAdmin() {
      this.router.navigate(['/admin']);
    }
    navigateToLogin() {
      this.router.navigate(['/login']); // Redirect to login page
    }
}
