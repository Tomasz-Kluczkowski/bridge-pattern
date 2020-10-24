export class Artist {
  constructor(
    private bio: string,
    private blogUrl: string,
    private photoUrl: string,
    private firstName: string,
    private lastName: string,
  ) {}

  public getBio(): string {
    return this.bio;
  }

  public getBlogUrl(): string {
    return this.blogUrl;
  }

  public getPhotoUrl(): string {
    return this.photoUrl;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
