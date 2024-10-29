import { Component } from '@angular/core';
import { ChorusService } from './service/chorus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chorus-connector';
  constructor(private chorusService: ChorusService) {}
  ngOnInit() {
    this.chorusService.loadInitialChoruses();
  }
}
