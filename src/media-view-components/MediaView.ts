import {MediaResource} from '../media-resources/MediaResource';

export abstract class MediaView {
  protected constructor(protected mediaResource: MediaResource) {}

  abstract show(): string;
}
