import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { NavigationModule } from 'src/app/navigation/navigation.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeRoutingModule } from './routing/home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    AuthenticationModule,
    MatSidenavModule,
    NavigationModule,
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
