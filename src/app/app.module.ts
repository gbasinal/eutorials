import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItemComponent } from './components/navbar/menu-item/menu-item.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { SearchBoxComponent } from './components/navbar/search-box/search-box.component';
import { HomeLandingComponent } from './components/home/home-landing.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HoverActiveDirective } from './directives/hover-active.directive';
import { ClickActiveDirective } from './directives/click-active.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuItemComponent,
    LogoComponent,
    SearchBoxComponent,
    HomeLandingComponent,
    AboutComponent,
    ProfileComponent,
    HoverActiveDirective,
    ClickActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
