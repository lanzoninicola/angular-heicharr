import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { LoginComponent } from './authentication/components/login/login.component';
import { AuthhrGuard } from './authentication/routing/authhr.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then((m) => {
        return m.HomePageModule;
      }),
    canActivate: [AuthhrGuard],
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
    path: 'job-application',
    loadChildren: () =>
      import('./pages/job-application/job-application.module').then((m) => {
        return m.JobApplicationModule;
      }),
    canActivate: [AuthGuard],
  },
  {
    path: 'job-id',
    loadChildren: () =>
      import('./pages/job-id/job-id.module').then((m) => {
        return m.JobIdModule;
      }),
    canActivate: [AuthGuard],
  },
  {
    path: 'interview',
    loadChildren: () =>
      import('./pages/interview/interview.module').then((m) => {
        return m.InterviewModule;
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
