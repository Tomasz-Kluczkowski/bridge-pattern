import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  viewType = 'short';
  entityType = 'book';

  title = 'Bridge Pattern Example Code';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setEntityType(this.entityType);
  }

  toggleEntityType(): void {
    this.entityType = this.entityType === 'book' ? 'artist' : 'book';
    this.dataService.setEntityType(this.entityType);
  }

  setViewType(viewType: string): void {
    this.viewType = viewType;
  }
}
