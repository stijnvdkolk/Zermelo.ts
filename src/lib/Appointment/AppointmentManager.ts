import { Manager } from "../Manager";
import fetch from "node-fetch";
import { createApiURL } from "../Util";
import { Response, IAppointment } from "../Interfaces";
import { Appointment } from "./Appointment";

export class AppointmentManager extends Manager {

  async get(startDate: Date, endDate: Date, user = "~me") {
    const res = await fetch(createApiURL(this.school, `appointments?user=${user}&start=${startDate.getTime() / 1000}&end=${endDate.getTime() / 1000}`, this.accessToken));
    const json: Response<IAppointment> = await res.json();
    return json.response.data.map(appointment => new Appointment(appointment)).sort((a, b) => {
      if (a.start === b.start) return 0;
      if (a.start! < b.start!) return -1;
      return 1;
    });
  }

  async getParticipations(year: number, weeknumber: number, user = "~me") {
    if (weeknumber <= 52 && weeknumber >= 1) {
      const res = await fetch(createApiURL(this.school, `appointmentparticipations?student=${user}&week=${year}${Math.round(weeknumber) < 10 ? `0${Math.round(weeknumber)}` : Math.round(weeknumber)}&fields=id,appointmentInstance,studentInDepartment,optional,studentEnrolled,attendanceParticipationCoordinator,plannedAttendance,realizedAttendance,publicComment,start,end,subjects,teachers,locations,groups,schedulerRemark,changeDescription,startTimeSlotName,endTimeSlotName,allowedStudentActions,availableSpace,cancelled,appointmentType,content`, this.accessToken));
      const json: Response<IAppointment> = await res.json();
      return json.response.data.map(appointment => new Appointment(appointment)).sort((a, b) => {
        if (a.start === b.start) return 0;
        if (a.start! < b.start!) return -1;
        return 1;
      });
    } else throw "Weeknumber must be between 1-52";
  }
}
