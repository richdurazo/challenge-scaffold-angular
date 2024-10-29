import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chorus } from 'src/api/chrous';
import { ChorusService } from '../service/chorus.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  chorusList: Chorus[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private chorusService: ChorusService) {}

  ngOnInit() {
    setTimeout(() => {
      this.chorusService.getChorusList().subscribe(
        (choruses) => {
          this.chorusList = choruses;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching choruses:', error);
          this.loading = false; // Set loading to false on error
        }
      );
    }, 2000)
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  clear(table: Table) {
    table.clear();
  }
}
