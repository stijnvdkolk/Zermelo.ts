export interface Response<A> {
  response: {
    status: number,
    message: string,
    details: string,
    eventId: number,
    startRow: number,
    endRow: number,
    totalRows: number,
    data: A[]
  }
}

export interface ITokenResponse {
  access_token: string,
  token_type: string,
  expires_in: number
}

export interface IUser {
  code?: string,
  totpSecret?: string,
  totpInterval?: number,
  totpDigits?: number,
  totpAlgorithm?: string,
  totpEnabled?: boolean,
  tfaMandatory?: boolean,
  ldap?: boolean,
  admin?: boolean,
  username?: string,
  userPrincipalName?: string,
  somUUID?: string,
  magisterUUID?: string,
  firstName?: string,
  prefix?: string,
  lastName?: string,
  gender?: "m" | "f",
  email?: string,
  emailVerified?: boolean,
  street?: string,
  city?: string,
  schoolInSchoolYears?: number[],
  isApplicationManager?: boolean,
  archived?: boolean,
  hasPassword?: boolean,
  isStudent?: boolean,
  isEmployee?: boolean,
  isFamilyMember?: boolean,
  houseNumber?: string,
  postalCode?: string,
  isSchoolScheduler?: boolean,
  isSchoolLeader?: boolean,
  isStudentAdministrator?: boolean,
  isTeamLeader?: boolean,
  isSectionLeader?: boolean,
  isMentor?: boolean,
  isParentTeacherNightScheduler?: boolean,
  isDean?: boolean,
  displayName?: string
}

export interface ISchool {
  id?: number,
  name?: string,
  defaultStudentRole?: any,
  defaultEmployeeRole?: any,
  defaultFamilyMemberRole?: any,
  brin?: string,
  region?: string,
  defaultStudentRoleName?: string,
  defaultEmployeeRoleName?: string,
  defaultFamilyMemberRoleName?: string
}

export interface IAnnouncement {
  id?: number,
  start?: number,
  end?: number,
  title?: string,
  text?: string,
  branchesOfSchools?: number[]
}

export interface IAppointment {
  isNew?: any,
  id?: number,
  appointmentInstance?: number,
  start?: number,
  end?: number,
  startTimeSlot?: number,
  endTimeSlot?: number,
  subjects?: string[],
  type?: "unknown" | "lesson" | "exam" | "activity" | "choice" | "talk" | "other",
  remark?: string,
  locations?: string[],
  teachers?: string[],
  students?: string[],
  groups?: string[],
  created?: number,
  lastModified?: number,
  valid?: boolean,
  hidden?: boolean,
  cancelled?: boolean,
  modified?: boolean,
  moved?: boolean,
  new?: boolean,
  changeDescription?: string
}