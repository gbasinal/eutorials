import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eutorials';


  ngOnInit() {
    var mTop = $(".navbar-container").outerHeight();
    $(".main-container").css("padding-top", mTop);
  }

}
