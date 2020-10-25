import {Artist} from '../entities/Artist';
import {Book} from '../entities/Book';
import {Entity} from '../entities/Entity';

export const BOOKS_DATA = [
  {
    id: 'asda-1213',
    backCoverText: 'Some text at the back of book 1.',
    storeId: 'sdfs-1234-iop',
    frontCoverUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
    tile: 'Bridge Pattern Matters'
  },
  {
    id: 'sdfwef-ssdfw3',
    backCoverText: 'Back cover text for book 2',
    storeId: 'asdae-sdfseg-121sw',
    frontCoverUrl: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    tile: 'No Pattern No Gain'
  },
];

export const ARTISTS_DATA = [
  {
    id: '23r22-wef23f2',
    bio: 'Bio of artist Joe Satriani. He lived long time ago....',
    blogUrl: 'http://www.satriani.com/',
    photoUrl: 'http://www.satriani.com/about/bandcrew/images/Shapeshifting-trimmed.jpg',
    firstName: 'Joe',
    lastName: 'Satriani'
  },
  {
    id: 'sfwefsef-sdwe23',
    bio: 'Bio of Steve Vai. Once upon the time....',
    blogUrl: 'https://www.vai.com/',
    photoUrl: 'https://www.vai.com/images/pawtour.png',
    firstName: 'Steve',
    lastName: 'Vai'
  }
];

export const ARTISTS = ARTISTS_DATA.map(
  artistData => new Artist(
    artistData.id, artistData.bio, artistData.blogUrl, artistData.photoUrl, artistData.firstName, artistData.lastName
  )
);


export const BOOKS = BOOKS_DATA.map(
  bookData => new Book(bookData.id, bookData.backCoverText, bookData.storeId, bookData.frontCoverUrl, bookData.tile)
);

const entityMap = {
  book: BOOKS,
  artist: ARTISTS
};

export function getAllMediaDataForEntityType(entityType: string): Array<Entity> {
  return entityMap[entityType];
}
