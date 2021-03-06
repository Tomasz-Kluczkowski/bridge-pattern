import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ARTISTS_DATA, BOOKS_DATA} from '../PseudoDatabase/Database';
import {LongFormMediaView} from '../Views/LongFormMediaView';
import {ArtistMediaResource} from '../MediaResources/ArtistMediaResource';
import {Artist} from '../Entities/Artist';
import {Book} from '../Entities/Book';
import {BookMediaResource} from '../MediaResources/BookMediaResource';
import {ShortFormMediaView} from '../Views/ShortFormMediaView';
import {MediaView} from '../Views/MediaView';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  viewHTML: string;
  viewType = 'short';
  mediaResourceType = 'book';
  mediaResourceNumber = 0;

  title = 'bridge-pattern';
  artists = ARTISTS_DATA.map(
      artistData => new Artist(
        artistData.bio, artistData.blogUrl, artistData.photoUrl, artistData.firstName, artistData.lastName
      )
    );
  books = BOOKS_DATA.map(
      bookData => new Book(bookData.backCoverText, bookData.storeId, bookData.frontCoverUrl, bookData.tile)
    );
  viewTypes = {
    short: ShortFormMediaView,
    long: LongFormMediaView
  };
  mediaResourceTypes = {
    book: BookMediaResource,
    artist: ArtistMediaResource
  };

  mediaDataTypes = {
    artist: this.artists,
    book: this.books
  };

  ngOnInit(): void {
    this.viewHTML = this.getViewClass().show();
  }

  getViewClass(): MediaView {
    const mediaData = this.mediaDataTypes[this.mediaResourceType][this.mediaResourceNumber];

    const mediaResource = new this.mediaResourceTypes[this.mediaResourceType](mediaData);

    return new this.viewTypes[this.viewType](mediaResource);
  }

  toggleViewType(): void {
    this.viewType = this.viewType === 'short' ? 'long' : 'short';
    this.viewHTML = this.getViewClass().show();
  }

  toggleMediaResourceType(): void {
    this.mediaResourceType = this.mediaResourceType === 'book' ? 'artist' : 'book';
    this.viewHTML = this.getViewClass().show();
  }

  toggleMediaResourceNumber(): void {
    this.mediaResourceNumber = this.mediaResourceNumber === 0 ? 1 : 0;
    this.viewHTML = this.getViewClass().show();
  }
}
