import { IAnnouncement } from "../Interfaces";

export class Announcement {
  id: number | undefined;
  start: number | undefined;
  end: number | undefined;
  title: string | undefined;
  text: string | undefined;
  constructor(announcement: IAnnouncement) {
    this.id = announcement.id;
    this.start = announcement.start;
    this.end = announcement.end;
    this.title = announcement.title;
    this.text = announcement.text;
  }
}