import {Entity} from './Entity';

export class Artist extends Entity {
  constructor(
    private id: string,
    private bio: string,
    private blogUrl: string,
    private photoUrl: string,
    private firstName: string,
    private lastName: string,
  ) {
    super(id);
  }

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
