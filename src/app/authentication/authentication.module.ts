import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationRoutingModule } from './routing/authentication-routing.module';

@NgModule({
  declarations: [LoginButtonComponent, LogoutButtonComponent, LoginComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [LoginButtonComponent, LogoutButtonComponent, LoginComponent],
})
export class AuthenticationModule {}
