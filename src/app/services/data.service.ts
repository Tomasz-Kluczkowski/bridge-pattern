import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ARTISTS, BOOKS} from '../../database-records/Database';
import {Entity} from '../../entities/Entity';
import {MediaResource} from '../../media-resources/MediaResource';
import {BookMediaResource} from '../../media-resources/BookMediaResource';
import {ArtistMediaResource} from '../../media-resources/ArtistMediaResource';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  entityMap = {
    book: BOOKS,
    artist: ARTISTS
  };

  mediaResourceTypes = {
    book: BookMediaResource,
    artist: ArtistMediaResource
  };

  public entityType = new BehaviorSubject<string>('book');

  public setEntityType(entityType: string): void {
    this.entityType.next(entityType);
  }


  public getMediaResources(): Observable<Array<MediaResource>> {
    return this.entityType.pipe(
      map(
        entityType => {
          const entities = this.getAllMediaDataForEntityType(entityType);
          return entities.map(entity => new this.mediaResourceTypes[entityType](entity));
        }
      )
    );
  }

  private getAllMediaDataForEntityType(entityType: string): Array<Entity> {
    return this.entityMap[entityType];
  }
}
