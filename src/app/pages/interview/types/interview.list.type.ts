import { CandidateModel } from '../../candidates/models/candidate.model';
import { PicklistItemModel } from 'src/app/pages/settings/models/picklist-item.model';
import { JobApplicationModel } from '../../job-board/models/job-application.model';
import { JobIdModel } from '../../job-board/models/jobid.model';

export interface InterviewRoundOnListTable {
  interviewId: number;
  roundId: number;
  jobApplication: JobApplicationModel;
  candidate: CandidateModel;
  jobId: JobIdModel;
  roundName: string;
  stage: PicklistItemModel;
  scheduledAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
