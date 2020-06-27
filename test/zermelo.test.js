const { Zermelo, Announcement, Appointment, School, User } = require("../dist");
const mocha = require("mocha");
const { expect } = require("chai");

let info;
try {
  info = require("./credentials.json");
} catch (e) {
  info = {
    school: process.env.TEST_SCHOOL,
    accessToken: process.env.TEST_ACCESS_TOKEN,
  }
}

mocha.describe("Zermelo", async () => {
  /**
   * @type {Zermelo}
   */
  let zermelo;

  before("create zermelo class", () => {
    zermelo = Zermelo.getAPI(info.school, info.accessToken);
  });

  it("should be an instance of Zermelo", () => {
    expect(zermelo).to.be.an.instanceOf(Zermelo);
  });

  describe("Announcements", () => {
    it("should get announcements", async () => {
      const announcements = await zermelo.announcements.get();
      expect(announcements).to.be.an("array");
      for (const announcement of announcements) {
        expect(announcement).to.be.an.instanceof(Announcement);
      }
    })
  });

  describe("Appointments", () => {
    it("should get appointments", async () => {
      const appointments = await zermelo.appointments.get(new Date().getTime() / 1000, new Date().getTime() / 1000);
      expect(appointments).to.be.an("array");
      for (const appointment of appointments) {
        expect(appointment).to.be.an.instanceof(Appointment);
      }
    })
    it("should get appointmentparticipations", async () => {
      const appointments = await zermelo.appointments.getParticipations(2020, 13);
      expect(appointments).to.be.an("array");
      for (const appointment of appointments) {
        expect(appointment).to.be.an.instanceof(Appointment);
      }
    })
  });

  describe("Users", () => {
    it("should get an user", async () => {
      const user = await zermelo.users.get();
      expect(user).to.be.an.instanceOf(User);
    })

    it("should get all users", async () => {
      const users = await zermelo.users.getAll();
      expect(users).to.be.an("array");
      for (const user of users) {
        expect(user).to.be.an.instanceof(User);
      }
    })
  });

  describe("Schools", () => {
    let schoolid = 0;

    it("should get all schools", async () => {
      const schools = await zermelo.schools.getAll();
      expect(schools).to.be.an("array");
      schoolid = schools[0].id;
      for (const school of schools) {
        expect(school).to.be.an.instanceof(School);
      }
    })

    it("should get a school", async () => {
      const school = await zermelo.schools.get(schoolid);
      expect(school).to.be.an.instanceOf(School);
    })
  });
});