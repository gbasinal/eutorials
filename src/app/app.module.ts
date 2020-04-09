import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItemComponent } from './components/navbar/menu-item/menu-item.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { SearchBoxComponent } from './components/navbar/search-box/search-box.component';
import { HomeLandingComponent } from './views/home/home-landing.component';
import { AboutComponent } from './views/about/about.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HoverActiveDirective } from './directives/hover-active.directive';
import { ClickActiveDirective } from './directives/click-active.directive';
import { VideoContainerComponent } from './components/video/video-container/video-container.component';
import { VideoContentComponent } from './components/video/video-content/video-content.component';
import { AdminComponent } from './views/admin/admin.component';

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
    ClickActiveDirective,
    VideoContainerComponent,
    VideoContentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
