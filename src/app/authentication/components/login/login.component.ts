import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ahr-login',
  template: `
    <div class="login-container">
      <div class="bg-overlay"></div>
      <div class="login-wrapper">
        <div class="login-header">
          <h4>Welcome to Heicharr</h4>
          <h1>Focused on people, again.</h1>
        </div>
        <div class="login-content">
          <p>Please log in.</p>
          <!-- <ahr-login-button></ahr-login-button> -->
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  sub = new Subscription();

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this._router.navigate(['/dashboard']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
