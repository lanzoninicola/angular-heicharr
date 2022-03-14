import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { of, Subscription, switchMap } from 'rxjs';
import { BreakpointService } from 'src/app/core/services/breakpoint.service';
import { UserService } from 'src/app/pages/users/services/user.service';

@Component({
  selector: 'ahr-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  sub = new Subscription();

  constructor(
    public breakpointService: BreakpointService,
    public authz: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log('home init');

    this._loadAppUser();

    this._dashboardRedirect();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private _loadAppUser() {
    const { authz, _userService } = this;

    this.sub.add(
      authz.user$
        .pipe(
          switchMap((userAuthz) => {
            if (userAuthz?.email) {
              return _userService.findByEmail(userAuthz.email);
            }
            return of(null);
          })
        )
        .subscribe((userModel) =>
          this._userService.stateAuthCurrentUser$.next(userModel)
        )
    );
  }

  private _dashboardRedirect() {
    this._router.navigate(['dashboard']);
  }
}
