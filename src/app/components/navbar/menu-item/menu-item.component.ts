import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  
  isActive : boolean;


  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

  closeMenu(){
    if($(".hamburger").length > 0) {
      $(".hamburger").trigger("click");
    }
  }


}
