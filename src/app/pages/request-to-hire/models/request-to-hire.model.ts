import { BranchModel } from 'src/app/pages/settings/models/branch.model';
import { DepartmentModel } from 'src/app/pages/settings/models/department.model';
import { JobRoleModel } from 'src/app/pages/settings/models/job-role.model';
import { PicklistItemModel } from 'src/app/pages/settings/models/picklist-item.model';

import { UserModel } from '../../users/models/user.model';

//TODO: separate the model into head and body

export class RequestToHireModel {
  id: number;
  title: string;
  department: DepartmentModel;
  businessUnit: PicklistItemModel;
  requester: UserModel;
  jobRole: JobRoleModel;
  roleTaskDescription: string; // long description
  roleLevel: PicklistItemModel;
  highPriority: boolean;
  jobLocationType: PicklistItemModel;
  jobLocation: BranchModel;
  employmentStatus: PicklistItemModel;
  minimumQualifications: string; // long description
  preferredQualifications: string; // long description
  benefits: string; // long description
  budget: string;
  specialCategoriesOpened: boolean;
  additionalNotes: string; // long description
  status: PicklistItemModel;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    title: string,
    department: DepartmentModel,
    businessUnit: PicklistItemModel,
    requester: UserModel,
    jobRole: JobRoleModel,
    roleTaskDescription: string,
    roleLevel: PicklistItemModel,
    highPriority: boolean,
    jobLocationType: PicklistItemModel,
    jobLocation: BranchModel,
    employmentStatus: PicklistItemModel,
    minimumQualifications: string,
    preferredQualifications: string,
    benefits: string,
    budget: string,
    specialCategoriesOpened: boolean,
    additionalNotes: string,
    status: PicklistItemModel,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.department = department;
    this.businessUnit = businessUnit;
    this.requester = requester;
    this.jobRole = jobRole;
    this.roleTaskDescription = roleTaskDescription;
    this.roleLevel = roleLevel;
    this.highPriority = highPriority;
    this.jobLocationType = jobLocationType;
    this.jobLocation = jobLocation;
    this.employmentStatus = employmentStatus;
    this.minimumQualifications = minimumQualifications;
    this.preferredQualifications = preferredQualifications;
    this.benefits = benefits;
    this.budget = budget;
    this.specialCategoriesOpened = specialCategoriesOpened;
    this.additionalNotes = additionalNotes;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDepartment(): DepartmentModel {
    return this.department;
  }

  getBusinessUnit(): PicklistItemModel {
    return this.businessUnit;
  }

  getRequester(): UserModel {
    return this.requester;
  }

  getJobRole(): JobRoleModel {
    return this.jobRole;
  }

  getRoleTaskDescription(): string {
    return this.roleTaskDescription;
  }

  getRoleLevel(): PicklistItemModel {
    return this.roleLevel;
  }

  getHighPriority(): boolean {
    return this.highPriority;
  }

  getJobLocationType(): PicklistItemModel {
    return this.jobLocationType;
  }

  getJobLocation(): BranchModel {
    return this.jobLocation;
  }

  getEmploymentStatus(): PicklistItemModel {
    return this.employmentStatus;
  }

  getMinimumQualifications(): string {
    return this.minimumQualifications;
  }

  getPreferredQualifications(): string {
    return this.preferredQualifications;
  }

  getBenefits(): string {
    return this.benefits;
  }

  getBudget(): string {
    return this.budget;
  }

  getSpecialCategoriesOpened(): boolean {
    return this.specialCategoriesOpened;
  }

  getAdditionalNotes(): string {
    return this.additionalNotes;
  }

  getStatus(): PicklistItemModel {
    return this.status;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
