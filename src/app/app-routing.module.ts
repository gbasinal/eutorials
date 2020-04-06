import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLandingComponent } from './components/home/home-landing.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';

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
