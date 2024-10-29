import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chorus } from 'src/api/chrous';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class ChorusService {
  private choruses: Chorus[] = [];
  loading: boolean = true; // Track loading state

  constructor(private http: HttpClient) {
  }

  // Load the initial choruses from the local JSON file
  loadInitialChoruses() {
    this.http
      .get<{ choruses: Chorus[] }>('assets/data.json')
      .pipe(
        map((data) => {
          this.choruses = data.choruses || [];
          this.loading = false; // Set loading to false when data is loaded
        }),
        catchError((error) => {
          this.loading = false; // Handle error and stop loading
          console.error('Error loading choruses:', error);
          return throwError(error); // Rethrow the error
        })
      )
      .subscribe();
  }

  // Get the chorus list (in-memory array)
  getChorusList(): Observable<Chorus[]> {
    return of(this.choruses);
  }
    // Add a new chorus to the in-memory array and return the updated list
    addChorus(newChorus: Chorus): Observable<Chorus[]> {
      // Generate a unique ID (for example purposes, replace with a real ID generator)
      newChorus.id = Math.random().toString(36).substring(2, 15);

      // Add the new chorus to the array
      this.choruses.push(newChorus);

      // Simulate API response by returning the updated list
      return of(this.choruses);
    }
}
