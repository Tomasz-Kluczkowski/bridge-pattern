import {MediaView} from './MediaView';
import {MediaResource} from '../MediaResources/MediaResource';

export class ShortFormMediaView extends MediaView {
  constructor(mediaResource: MediaResource) {
    super(mediaResource);
  }

  show(): string {
    return (
      `<div>${this.mediaResource.getTitle()}</div>
      <a href="${this.mediaResource.getUrl()}">Details</a>`
    );
  }
}
