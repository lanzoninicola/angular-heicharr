import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/pages/users/services/user.service';

@Component({
  selector: 'ahr-user-badge',
  template: `
    <div class="user-badge-container">
      <div
        class="user-avatar"
        [ngStyle]="{
          'background-image':
            'url(' + (authService.user$ | async)?.picture + ')'
        }"
      ></div>
      <div class="user-details">
        <span class="fullname">
          {{ (authService.user$ | async)?.name }}
        </span>
        <span class="email">
          {{ (authService.user$ | async)?.email }}
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./user-badge.component.scss'],
})
export class UserBadgeComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this._userService.stateUserAuthenticated$.subscribe((user) => {
      console.log(user);
    });

    this.authService.user$.subscribe((user) => console.log(user));
  }
}
