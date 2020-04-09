import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLandingComponent } from './views/home/home-landing.component';
import { AboutComponent } from './views/about/about.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  {
    path: 'home', component: HomeLandingComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
