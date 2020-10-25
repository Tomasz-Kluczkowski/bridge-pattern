export class Book {
  constructor(
    private backCoverText: string,
    private storeId: string,
    private frontCoverUrl: string,
    private title: string,
  ) {}


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
