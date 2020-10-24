import {MediaResource} from './MediaResource';
import {Artist} from '../Entities/Artist';

export class ArtistMediaResource implements MediaResource {
  constructor(private artist: Artist) {}

  getDescription(): string {
    return this.artist.getBio();
  }

  getImageUrl(): string {
    return this.artist.getPhotoUrl();
  }

  getTitle(): string {
    return this.artist.getFullName();
  }

  getUrl(): string {
    return this.artist.getBlogUrl();
  }
}
