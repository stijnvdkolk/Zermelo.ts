import { getApiURL } from "./Util";
import fetch from "node-fetch";
import { AuthError } from "./Errors/AuthError";
import { ITokenResponse } from "./Interfaces";
import { SchoolManager } from "./School/SchoolManager";
import { UserManager } from "./User/UserManager";
import { AnnouncementsManager } from "./Announcement/AnnouncementManager";
import { AppointmentManager } from "./Appointment/AppointmentManager";

export class Zermelo {
  schools: SchoolManager;
  users: UserManager;
  announcements: AnnouncementsManager;
  appointments: AppointmentManager;

  constructor(private school: string, private accessToken: string) {
    this.schools = new SchoolManager(school, accessToken);
    this.users = new UserManager(school, accessToken);
    this.announcements = new AnnouncementsManager(school, accessToken);
    this.appointments = new AppointmentManager(school, accessToken);
  }

  public getSchool() {
    return this.school;
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public static getAPI(school: string, accessToken: string) {
    return new Zermelo(school, accessToken);
  }

  public static async getAccessToken(school: string, authCode: string) {
    const authURL = `${getApiURL(school)}/oauth/token`;
    const authCode = authCode.replace(/\s/g, "");

    const res = await fetch(`${authURL}?grant_type=authorization_code&code=${authCode}`, { method: "POST" });
    if (!res.ok) {
      const message = `Server returned with an error (${res.status})`;
      throw res.status === 401 ? new AuthError(message) : new Error(message);
    }
    
    const json: ITokenResponse = await res.json();
    
    if (json.access_token) return json.access_token;
    
    throw "Please try again later";
  }
}
