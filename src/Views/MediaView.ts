import {MediaResource} from '../MediaResources/MediaResource';

export abstract class MediaView {
  protected constructor(protected mediaResource: MediaResource) {}

  abstract show(): string;
}
