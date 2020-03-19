import { Manager } from "../Manager";
import fetch from "node-fetch";
import { createApiURL } from "../Util";
import { Response, IAnnouncement } from "../Interfaces";
import { Announcement } from "./Announcement";

export class AnnouncementsManager extends Manager {

  async get(user = "~me") {
    const res = await fetch(createApiURL(this.school, `announcements?user=${user}&current=true`, this.accessToken));
    const json: Response<IAnnouncement> = await res.json();
    return json.response.data.map(announcement => new Announcement(announcement)).sort((a, b) => {
      if (a.start === b.start) return 0;
      if (a.start! < b.start!) return -1;
      return 1;
    });
  }
}