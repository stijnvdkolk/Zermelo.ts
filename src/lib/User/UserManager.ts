import { Manager } from "../Manager";
import fetch from "node-fetch";
import { createApiURL } from "../Util";
import { Response, IUser } from "../Interfaces";
import { User } from "./User";

export class UserManager extends Manager {

  async getAll() {
    const res = await fetch(createApiURL(this.school, "users", this.accessToken));
    const json: Response<IUser> = await res.json();
    return json.response.data.map(user => new User(user));
  }

  async get(id = "~me") {
    const res = await fetch(createApiURL(this.school, `users/${id}`, this.accessToken));
    const json: Response<IUser> = await res.json();
    return new User(json.response.data[0]);
  }
}