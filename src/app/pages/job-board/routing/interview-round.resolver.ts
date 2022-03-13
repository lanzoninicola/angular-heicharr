import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EMPTY, Observable, tap } from 'rxjs';

import { InterviewRoundModel } from '../models/interview-round.model';
import { InterviewRoundService } from '../services/interview-round.service';
import { InterviewService } from '../services/interview.service';

@Injectable({
  providedIn: 'root',
})
export class InterviewRoundResolver implements Resolve<InterviewRoundModel> {
  entityIdParam: number;

  constructor(
    private _interviewRound: InterviewRoundService,
    private _interview: InterviewService,
    private _location: Location
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<InterviewRoundModel> {
    this.entityIdParam = parseInt(route.params['id'], 10);

    if (Number.isNaN(+this.entityIdParam)) {
      this._goBack();
    }

    return this._interviewRound.findById(this.entityIdParam).pipe(
      tap((interviewRound) => {
        this._interviewRound.stateCurrentInterviewRounds$.next([
          interviewRound,
        ]);
        this._interviewRound.stateInterviewRoundSelected$.next(interviewRound);
        this._interview.stateCurrentInterview$.next(interviewRound.interview);
        this._interview.stateEntityState$.next('update');
      })
    );
  }

  private _goBack() {
    return () => {
      this._location.back();
      return EMPTY;
    };
  }
}
