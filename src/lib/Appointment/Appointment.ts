import { IAppointment } from "../Interfaces";

export class Appointment {
  public id?: number;
  public start?: number;
  public end?: number;
  public startTimeSlot?: number;
  public endTimeSlot?: number;
  public subjects?: string[];
  public teachers?: string[];
  public groups?: string[];
  public locations?: string[];
  public type?: string;
  public remark?: string;
  public valid?: boolean;
  public cancelled?: boolean;
  public modified?: boolean;
  public moved?: boolean;
  public hidden?: boolean;
  public isNew?: any;
  public changeDescription?: string;
  public created?: number;
  public lastModified?: number;
  public appointmentInstance?: number;
  constructor(appointment: IAppointment) {
    this.id = appointment!.id;
    this.start = appointment!.start;
    this.end = appointment!.end;
    this.startTimeSlot = appointment!.startTimeSlot;
    this.endTimeSlot = appointment!.endTimeSlot;
    this.subjects = appointment!.subjects;
    this.teachers = appointment!.teachers;
    this.groups = appointment!.groups;
    this.locations = appointment!.locations;
    this.type = appointment!.type;
    this.remark = appointment!.remark;
    this.valid = appointment!.valid;
    this.cancelled = appointment!.cancelled;
    this.modified = appointment!.modified;
    this.moved = appointment!.moved;
    this.hidden = appointment!.hidden;
    this.isNew = appointment!.isNew;
    this.changeDescription = appointment!.changeDescription;
    this.created = appointment!.created;
    this.lastModified = appointment!.lastModified;
    this.appointmentInstance = appointment!.appointmentInstance;
  }
}