import { CandidateDTO } from '../../candidates/types/candidate.dto.type';
import { JobIdDTO } from '../../job-id/types/jobid.dto.type';

export interface JobApplicationDTO {
  id: number;
  jobsId: number;
  candidatesId: number;
  jaworkingstatusesId: number;
  createdAt: string;
  updatedAt: string;
  jobs: JobIdDTO | null;
  candidates: CandidateDTO | null;
}
