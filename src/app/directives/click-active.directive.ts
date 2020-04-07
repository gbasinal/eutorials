import { Directive, ElementRef ,  HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickActive]'
})
export class ClickActiveDirective {

  constructor(public elementRef: ElementRef) { }

  @Input('appClickActive') clickClass: any;
  isClicked : boolean = false;
  @HostListener('click') onClick(){
    console.log(this.clickClass)
    // this.elementref.nativeelement captures the dom where the event is bound

    if(!this.isClicked){
      this.isClicked = true;
      this.elementRef.nativeElement.classList.add(this.clickClass);
    }else {
      this.isClicked = false;
      this.elementRef.nativeElement.classList.remove(this.clickClass);
    }
    
  }
}
