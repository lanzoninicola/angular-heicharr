import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'ahr-logout-button',
  template: `
    <button mat-flat-button color="secondary" (click)="logout()">Logout</button>
  `,
})
export class LogoutButtonComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    @Inject(DOCUMENT) private _doc: Document
  ) {}

  ngOnInit(): void {}

  logout() {
    this._authService.logout({
      returnTo: this._doc.location.origin,
    });
  }
}
