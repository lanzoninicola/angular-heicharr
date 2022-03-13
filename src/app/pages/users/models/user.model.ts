import { DepartmentModel } from '../../settings/models/department.model';
import { PicklistItemModel } from '../../settings/models/picklist-item.model';

export class UserModel {
  private id: number;
  private firstname: string;
  private lastname: string;
  private email: string;
  private recruitingRole: PicklistItemModel;
  private department: DepartmentModel;
  private businessUnit: PicklistItemModel | null;
  private isAdmin: boolean;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    recruitingRole: PicklistItemModel,
    department: DepartmentModel,
    businessUnit: PicklistItemModel | null,
    isAdmin: boolean
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.recruitingRole = recruitingRole;
    this.department = department;
    this.businessUnit = businessUnit;
    this.isAdmin = isAdmin;
  }

  getId(): number {
    return this.id;
  }

  getFirstname(): string {
    return this.firstname;
  }

  getLastname(): string {
    return this.lastname;
  }

  getEmail(): string {
    return this.email;
  }

  getRecruitingRole(): PicklistItemModel {
    return this.recruitingRole;
  }

  getDepartment(): DepartmentModel {
    return this.department;
  }

  getBusinessUnit(): PicklistItemModel | null {
    return this.businessUnit;
  }

  getIsAdmin(): boolean {
    return this.isAdmin;
  }

  get fullname(): string {
    return `${this.lastname} ${this.firstname}`;
  }
}
