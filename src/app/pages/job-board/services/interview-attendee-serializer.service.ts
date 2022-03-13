import { Injectable } from '@angular/core';
import { DateService } from 'src/app/core/services/date.service';
import { UserModel } from '../../users/models/user.model';

import { InterviewAttendeeModel } from '../models/interview-attendee.model';
import { InterviewRoundModel } from '../models/interview-round.model';
import { InterviewAttendeeDTO } from '../types/interview.dto.type';

@Injectable({
  providedIn: 'root',
})
export class InterviewAttendeeSerializerService {
  constructor(private _dateService: DateService) {}

  deserialize(
    dto: InterviewAttendeeDTO,
    relations: {
      interviewRound: InterviewRoundModel;
      user: UserModel;
    }
  ): InterviewAttendeeModel {
    return new InterviewAttendeeModel(
      dto.id,
      relations.interviewRound,
      relations.user,
      this._dateService.ISOToFullDate(dto.createdAt),
      this._dateService.ISOToFullDate(dto.updatedAt)
    );
  }

  serialize(model: InterviewAttendeeModel): InterviewAttendeeDTO {
    return {
      id: model.id,
      interviewsroundsId: model.getInterviewRound().getId(),
      usersId: model.getAttendee().getId(),
      createdAt: this._dateService.dateToISOString(model.createdAt),
      updatedAt: this._dateService.dateToISOString(model.updatedAt),
    };
  }
}
