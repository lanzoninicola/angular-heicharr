import { UserModel } from '../../users/models/user.model';

import { InterviewRoundModel } from './interview-round.model';

export class InterviewAttendeeModel {
  id: number;
  interviewRound: InterviewRoundModel;
  attendee: UserModel;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    interviewRound: InterviewRoundModel,
    attendee: UserModel,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.interviewRound = interviewRound;
    this.attendee = attendee;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getId(): number {
    return this.id;
  }

  getInterviewRound(): InterviewRoundModel {
    return this.interviewRound;
  }

  getAttendee(): UserModel {
    return this.attendee;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
