import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthenticationModule } from '../authentication/authentication.module';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentOutletDirective } from './directives/component-outlet.directive';
import { StringifyPipe } from './pipes/stringify.pipe';

@NgModule({
  declarations: [StringifyPipe, ComponentOutletDirective],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    NavigationModule,
    SharedModule,
    AuthenticationModule,
  ],
  exports: [StringifyPipe, ComponentOutletDirective],
})
export class CoreModule {}
