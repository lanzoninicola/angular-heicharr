import { BranchDTO } from 'src/app/pages/settings/models/branch.model';
import { DepartmentDTO } from 'src/app/pages/settings/types/department.type';
import { JobRoleDTO } from 'src/app/pages/settings/types/job-role.type';
import { PicklistId } from 'src/app/pages/settings/types/picklist-item.type';
import { UserDTO } from '../../users/types/user.dto.type';

export interface RequestToHireDTO {
  id: number;
  title: string;
  departmentsId: number;
  businessUnit: PicklistId;
  usersId: number;
  jobrolesId: number;
  roleTaskDescription: string; // long description
  roleLevel: PicklistId;
  highPriority: boolean;
  jobLocationType: PicklistId;
  branchesId: number;
  employmentStatus: PicklistId;
  minimumQualifications: string; // long description
  preferredQualifications: string; // long description
  benefits: string; // long description
  budget: string;
  specialCategoriesOpened: boolean;
  additionalNotes: string; // long description
  status: PicklistId;
  createdAt: string;
  updatedAt: string;
  users: UserDTO;
  departments: DepartmentDTO;
  jobroles: JobRoleDTO;
  branches: BranchDTO;
}

export type RTHStatus = 'new' | 'backlog' | 'in-progress' | 'pending' | 'done';
