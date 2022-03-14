import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { of, Subscription, switchMap } from 'rxjs';
import { UserService } from 'src/app/pages/users/services/user.service';

@Component({
  selector: 'ahr-login',
  template: `
    <ng-container *ngIf="!(authz.isAuthenticated$ | async)">
      <div class="login-container">
        <div class="bg-overlay"></div>
        <div class="login-wrapper">
          <div class="login-header">
            <h4>Welcome to Heicharr</h4>
            <h1>Focused on people, again.</h1>
          </div>
          <div class="login-content">
            <p>Please log in.</p>
            <ahr-login-button></ahr-login-button>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  sub = new Subscription();

  constructor(
    public authz: AuthService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const { authz, _userService } = this;
    // authz.user$.pipe(
    //   switchMap((userAuthz) => {
    //     if (userAuthz?.email) {
    //       return _userService.findByEmail(userAuthz.email);
    //     }
    //     return of(null);
    //   })
    // );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
