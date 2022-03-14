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
          {{ (userService.stateAuthCurrentUser$ | async)?.fullname }}
        </span>
        <span class="email">
          {{ (userService.stateAuthCurrentUser$ | async)?.email }}
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./user-badge.component.scss'],
})
export class UserBadgeComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public userService: UserService
  ) {}

  ngOnInit(): void {}
}
