import { Injectable } from '@angular/core';
import { DepartmentModel } from '../../settings/models/department.model';
import { PicklistItemModel } from '../../settings/models/picklist-item.model';
import { UserModel } from '../models/user.model';
import { UserDTO } from '../types/user.dto.type';

@Injectable({
  providedIn: 'root',
})
export class UserSerializerService {
  constructor() {}

  deserialize(
    dto: UserDTO,
    relations: {
      recruitingRole: PicklistItemModel;
      department: DepartmentModel;
      businessUnit: PicklistItemModel | null;
    }
  ) {
    return new UserModel(
      dto.id,
      dto.firstname,
      dto.lastname,
      dto.email,
      relations.recruitingRole,
      relations.department,
      relations.businessUnit,
      dto.isAdmin
    );
  }

  serialize(model: UserModel): UserDTO {
    const businessUnit =
      model.getBusinessUnit() !== null
        ? model.getBusinessUnit()!.getId()
        : null;

    return {
      id: model.getId(),
      firstname: model.getFirstname(),
      lastname: model.getLastname(),
      email: model.getEmail(),
      recruitingRole: model.getRecruitingRole().getId(),
      department: model.getDepartment().getId(),
      businessUnit,
      isAdmin: model.getIsAdmin(),
    };
  }
}
