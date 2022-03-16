import { RequestToHireDTO } from '../../request-to-hire/types/request-to-hire.dto.type';
import { BranchDTO } from 'src/app/pages/settings/models/branch.model';
import { DepartmentDTO } from 'src/app/pages/settings/models/department.model';
import { BoardTemplateDTO } from 'src/app/pages/settings/types/board-template.types';
import { JobRoleDTO } from 'src/app/pages/settings/types/job-role.type';
import { PicklistId } from 'src/app/pages/settings/types/picklist-item.type';
import { UserDTO } from '../../users/types/user.dto.type';

export interface JobIdDTO {
  id: number;
  requestsId: number;
  boardtemplatesId: number;
  title: string;
  departmentsId: number;
  businessUnit: PicklistId;
  usersId: number;
  jobrolesId: number;
  roleLevel: PicklistId;
  roleTaskDescription: string;
  jobLocationType: PicklistId;
  branchesId: number;
  employmentStatus: PicklistId;
  minimumQualifications: string;
  preferredQualifications: string;
  benefits: string;
  specialCategoriesOpened: boolean;
  status: PicklistId;
  createdAt: string;
  updatedAt: string;

  boardtemplates: BoardTemplateDTO;
  requests: RequestToHireDTO;
  users: UserDTO;
  departments: DepartmentDTO;
  jobroles: JobRoleDTO;
  branches: BranchDTO;
}

export type JobIdStatus = 'draft' | 'published' | 'closed';
