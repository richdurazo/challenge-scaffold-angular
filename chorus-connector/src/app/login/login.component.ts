import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

class Credentials {
  constructor(
    public email: string,
    public password: string,
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];

  password!: string;
  invalid_credentials = false;
  forgotPassword = false;
  credentials = new Credentials('admin@chorusconnection.com', 'password');
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
  }
  login(form: any) {
    if (!form.valid) {
      return;
    }

    this.authService.login(this.credentials.email, this.credentials.password).subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.invalid_credentials = false;
          this.router.navigate(['/admin']);

        } else {
          this.invalid_credentials = true; // Show error if login fails
        }
      },
      (err) => {
        console.error('Login error:', err);
        this.invalid_credentials = true;
      }
    );
  }
}
