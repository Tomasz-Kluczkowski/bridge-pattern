import {MediaResource} from './MediaResource';
import {Book} from '../entities/Book';

export class BookMediaResource implements MediaResource {
  constructor(private book: Book) {}

  getDescription(): string {
    return this.book.getBackCoverText();
  }

  getImageUrl(): string {
    return this.book.getFrontCover();
  }

  getTitle(): string {
    return this.book.getTitle();
  }

  getUrl(): string {
    return this.book.getStoreUrl();
  }
}
