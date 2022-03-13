import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TableColumnConfig } from 'src/app/table-data/types/table.types';

import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ahr-user-list',
  template: `
    <div class="container-list">
      <ahr2-table-data
        [dataSource]="tableDataSource$"
        [columns]="columns"
        (onRowClicked)="onRowClicked($event)"
      ></ahr2-table-data>
    </div>
  `,
})
export class UserListComponent implements OnInit {
  tableDataSource$: Observable<UserModel[]>;

  columns = USERS_LIST_TABLE_COLUMNS;

  constructor(private router: Router, private _routeSnapshot: ActivatedRoute) {}

  ngOnInit() {
    // this.tableDataSource$ = this._dataService.findAll();

    console.log(this._routeSnapshot.data);
  }

  onRowClicked(entityRow: UserModel) {
    this.router.navigate(['users', entityRow.getId()]);
  }
}

const USERS_LIST_TABLE_COLUMNS: TableColumnConfig[] = [
  {
    key: 'lastname',
    title: 'Lastname',
  },
  {
    key: 'firstname',
    title: 'Firstname',
  },
  {
    key: 'email',
    title: 'E-mail',
  },
  {
    key: 'recruitingRole',
    title: 'Role',
  },
  {
    key: 'department',
    title: 'department',
  },
  {
    key: 'companyRoleLevel',
    title: 'Level',
  },
];
