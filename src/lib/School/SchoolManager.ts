import { Manager } from "../Manager";
import fetch from "node-fetch";
import { createApiURL } from "../Util";
import { Response, ISchool } from "../Interfaces";
import { School } from "./School";

export class SchoolManager extends Manager {

  async getAll() {
    const res = await fetch(createApiURL(this.school, "schools", this.accessToken));
    const json: Response<ISchool> = await res.json();
    return json.response.data.map(school => new School(school));
  }

  async get(id: string) {
    const res = await fetch(createApiURL(this.school, `schools/${id}`, this.accessToken));
    const json: Response<ISchool> = await res.json();
    return new School(json.response.data[0]);
  }
}