import {Component, OnInit} from '@angular/core';
import {getAllMediaDataForEntityType} from '../database-records/Database';
import {BookMediaResource} from '../media-resources/BookMediaResource';
import {ArtistMediaResource} from '../media-resources/ArtistMediaResource';
import {MediaResource} from '../media-resources/MediaResource';
import {AbstractMediaViewComponent} from './media-view-components/abstract-media-view/abstract-media-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  viewType = 'short';
  mediaResourceType = 'book';
  mediaResources: Array<MediaResource>;

  title = 'bridge-pattern';

  mediaResourceTypes = {
    book: BookMediaResource,
    artist: ArtistMediaResource
  };

  ngOnInit(): void {
    this.mediaResources = this.getMediaResources();
  }

  getMediaResources(): Array<MediaResource> {
    const allMediaDataForEntityType = getAllMediaDataForEntityType(this.mediaResourceType);
    return allMediaDataForEntityType.map(
      mediaData => new this.mediaResourceTypes[this.mediaResourceType](mediaData)
    );
  }

  toggleMediaResourceType(): void {
    this.mediaResourceType = this.mediaResourceType === 'book' ? 'artist' : 'book';
    this.mediaResources = this.getMediaResources();
  }

  onOutletLoaded(component: AbstractMediaViewComponent): void {
    component.mediaResources = this.mediaResources;
  }
}
