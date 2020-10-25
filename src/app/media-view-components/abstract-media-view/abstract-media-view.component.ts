import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaResource} from '../../../media-resources/MediaResource';
import {DataService} from '../../services/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-abstract-media-view',
  templateUrl: './abstract-media-view.component.html',
  styleUrls: ['./abstract-media-view.component.css']
})
export class AbstractMediaViewComponent implements OnInit, OnDestroy {
  public mediaResources: Array<MediaResource>;
  mediaResources$: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.mediaResources$ = this.dataService.getMediaResources().subscribe(
      mediaResources => this.mediaResources = mediaResources
    );
  }

  ngOnDestroy(): void {
    this.mediaResources$.unsubscribe();
  }
}
