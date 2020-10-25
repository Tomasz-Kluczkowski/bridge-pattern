import {Entity} from './Entity';

export class Book extends Entity {
  constructor(
    private id: string,
    private backCoverText: string,
    private storeId: string,
    private frontCoverUrl: string,
    private title: string,
  ) {
    super(id);
  }


  public getBackCoverText(): string {
    return this.backCoverText;
  }

  public getStoreUrl(): string {
    return `https://my-store-url/${this.storeId}`;
  }

  public getFrontCover(): string {
    return this.frontCoverUrl;
  }

  public getTitle(): string {
    return this.title;
  }
}
