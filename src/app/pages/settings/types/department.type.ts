import { UserModel } from '../../users/models/user.model';

export interface DepartmentDTO {
  id: number;
  name: string;
  manager: UserModel;
  teamLeads: UserModel[];
}
