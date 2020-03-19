export class Manager {

  school: string;
  accessToken: string;

  constructor(school: string, accessToken: string) {
    this.school = school;
    this.accessToken = accessToken;
  }
}