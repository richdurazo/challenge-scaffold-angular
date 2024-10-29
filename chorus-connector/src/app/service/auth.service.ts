import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private isLoggedIn = false; // Stores login status

  constructor(private http: HttpClient) {}
  /**
   * Mock login function
   */
  login(username: string, password: string): Observable<boolean> {
    return of(username === 'admin@chorusconnection.com' && password === 'password').pipe(
      tap((isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
        if (isAuthenticated) {
          localStorage.setItem('isLoggedIn', 'true');
        }
      })
    );
  }
  /**
   * Checks if the user is authenticated
   */
  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }

  /**
   * Logs the user out
   */
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn'); // Remove from storage
  }
}
