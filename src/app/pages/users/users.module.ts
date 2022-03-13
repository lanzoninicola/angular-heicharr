import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/core/core.module';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableDataModule } from 'src/app/table-data/table-data.module';

import { UserEditFormComponent } from './components/user-edit/user-edit-form/user-edit-form.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersSectionComponent } from './components/users-section/users-section.component';
import { UsersRoutingModule } from './routing/users-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UsersSectionComponent,
    UserEditFormComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    SharedModule,
    MatDividerModule,
    DynamicFormModule,
    MatButtonModule,
    MatIconModule,
    TableDataModule,
  ],
  providers: [],
})
export class UsersModule {}
