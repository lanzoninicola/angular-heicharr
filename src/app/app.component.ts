import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '@auth0/auth0-angular';

//TODO: Prefetching data Picklist, Settings, Users in the store starting after 15000ms
// skipping loading spinner and http error handling intercepotrs

//TODO: check SWR for data loading
// to http service add implements HttpService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav | any = null;

  constructor(public authz: AuthService) {}

  ngOnInit() {}
}
