import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthhrGuard } from 'src/app/authentication/routing/authhr.guard';

import { HomePageComponent } from '../components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthhrGuard],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
