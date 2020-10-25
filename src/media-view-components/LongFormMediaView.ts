import {MediaView} from './MediaView';
import {MediaResource} from '../media-resources/MediaResource';

export class LongFormMediaView extends MediaView {
  constructor(mediaResource: MediaResource) {
    super(mediaResource);
  }

  show(): string {
    return (
      `<div>${this.mediaResource.getTitle()}</div>
      <div><img src="${this.mediaResource.getImageUrl()}"</div>
      <div>${this.mediaResource.getDescription()}</div>
      <a href="${this.mediaResource.getUrl()}">Show more...</a>`
    );
  }
}
