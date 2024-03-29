import { UserModel } from '../../users/models/user.model';

export class DepartmentModel {
  private id: number;
  private name: string;
  private manager: UserModel;
  private teamLeads: UserModel[];

  constructor(
    id: number,
    name: string,
    manager: UserModel,
    teamLeads: UserModel[]
  ) {
    this.id = id;
    this.name = name;
    this.manager = manager;
    this.teamLeads = teamLeads;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getManager(): UserModel {
    return this.manager;
  }

  getTeamLeads(): UserModel[] {
    return this.teamLeads;
  }

  setManager(manager: UserModel): void {
    this.manager = manager;
  }

  setTeamLeads(teamLeads: UserModel[]): void {
    this.teamLeads = teamLeads;
  }
}

export interface DepartmentDTO {
  id: number;
  name: string;
  manager: UserModel;
  teamLeads: UserModel[];
}
