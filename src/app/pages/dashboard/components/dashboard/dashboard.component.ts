import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/users/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
}
