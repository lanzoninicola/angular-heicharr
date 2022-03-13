import { DepartmentModel } from '../../settings/models/department.model';
import { PicklistItemModel } from '../../settings/models/picklist-item.model';

export interface UserEditFormPicklist {
  companyLevels?: string[];
  departmentsValues?: string[];
  platformRoleValues?: string[];
}

export interface UserFormData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  recruitingRoles: PicklistItemModel;
  departments: DepartmentModel;
  businessUnit: PicklistItemModel;
  isAdmin: boolean;
}
