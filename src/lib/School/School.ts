import { ISchool } from "../Interfaces";

export class School {
  public id?: number;
  public name?: string;
  constructor(school: ISchool) {
    this.id = school.id;
    this.name = school.name;

  }
}