import { Component, OnInit } from '@angular/core';
import { ChorusService } from '../service/chorus.service';

class Location {
  constructor(public city: string, public state: string) {}
}
class Chorus {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public location: Location,
    public contactEmail: string
  ) {}
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  loading: boolean = false;
  chorus = new Chorus('', '', '', new Location('', ''), '');

  constructor(private chorusService: ChorusService) {}

  load(form: any) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.chorus = new Chorus('', '', '', new Location('', ''), '');
      form.reset();
    }, 2000);
  }
  submitForm(form: any) {
    if (!form.valid) {
      return;
    }
    this.chorusService.addChorus(this.chorus).subscribe((updatedChoruses) => {
      console.log('Updated chorus list:', updatedChoruses);
      // Optionally reset the form and the `chorus` object here
      this.load(form);
    });
  }
}
