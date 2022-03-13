import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { LoginComponent } from './authentication/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => {
        return m.DashboardModule;
      }),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => {
        return m.UsersModule;
      }),
  },
  {
    path: 'candidates',
    loadChildren: () =>
      import('./pages/candidates/candidates.module').then((m) => {
        return m.CandidatesModule;
      }),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'request-to-hire',
  //   loadChildren: () =>
  //     import('./pages/request-to-hire/request-to-hire.module').then((m) => {
  //       return m.RequestToHireModule;
  //     }),
  // },
  {
    path: 'job-board',
    loadChildren: () =>
      import('./pages/job-board/job-board.module').then((m) => {
        return m.JobBoardModule;
      }),
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => {
        return m.SettingsModule;
      }),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
