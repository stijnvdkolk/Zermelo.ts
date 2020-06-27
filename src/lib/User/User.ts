import { IUser } from "../Interfaces";

export class User {
  public firstName: string | undefined;
  public lastName: string | undefined;
  public code: string | undefined;
  public prefix: string | undefined;
  public isArchived: boolean | undefined;
  public hasPassword: boolean | undefined;
  public isApplicationManager: boolean | undefined;
  public isStudent: boolean | undefined;
  public isEmployee: boolean | undefined;
  public isFamilyMember: boolean | undefined;
  public isSchoolScheduler: boolean | undefined;
  public isSchoolLeader: boolean | undefined;
  public isStudentAdministrator: boolean | undefined;
  public isTeamLeader: boolean | undefined;
  public isSectionLeader: boolean | undefined;
  public isMentor: boolean | undefined;
  public isDean: boolean | undefined;

  constructor(user: IUser) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.code = user.code;
    this.prefix = user.prefix;

    this.isArchived = user.archived;
    this.hasPassword = user.hasPassword;
    this.isApplicationManager = user.isApplicationManager;
    this.isStudent = user.isStudent;
    this.isEmployee = user.isEmployee;
    this.isFamilyMember = user.isFamilyMember;
    this.isSchoolScheduler = user.isSchoolScheduler;
    this.isSchoolLeader = user.isSchoolLeader;
    this.isStudentAdministrator = user.isStudentAdministrator;
    this.isTeamLeader = user.isTeamLeader;
    this.isSectionLeader = user.isSectionLeader;
    this.isMentor = user.isMentor;
    this.isDean = user.isDean;
  }
}