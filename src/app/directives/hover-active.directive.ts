import { Directive, ElementRef, HostListener, Input, Host } from '@angular/core';

@Directive({
  selector: '[appHoverActive]'
})
export class HoverActiveDirective {

  constructor(public elementRef: ElementRef) { }

  @Input('appHoverActive') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter(){
    console.log(this.hoverClass)
    // this.elementref.nativeelement captures the dom where the event is bound
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log(this.hoverClass)
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }
}
