import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'ahr-login-button',
  template: `
    <button mat-flat-button color="primary" (click)="loginWithRedirect()">
      Login
    </button>
  `,
})
export class LoginButtonComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  loginWithRedirect() {
    this._authService.loginWithRedirect();
  }
}
