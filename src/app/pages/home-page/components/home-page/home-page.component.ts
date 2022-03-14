import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
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
    public authService: AuthenticationService,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log('home init');

    this._loadAppUserData();

    this._dashboardRedirect();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private _loadAppUserData() {
    const { _userService } = this;

    this.sub.add(
      _userService
        .getUserDataFromAuthParty()
        .subscribe((userModel) =>
          this._userService.stateAuthCurrentUser$.next(userModel)
        )
    );
  }

  private _dashboardRedirect() {
    this._router.navigate(['dashboard']);
  }
}
