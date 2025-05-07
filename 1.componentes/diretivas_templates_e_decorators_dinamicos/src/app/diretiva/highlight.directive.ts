import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('style.background-color')
  bgColor = 'transparent'

  @HostBinding('style.cursor')
  cursor = ''


  @HostListener('mouseover')
  onMouseOver(){
    this.bgColor = 'orange'
    this.cursor = 'pointer'
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.bgColor = 'transparent'
  }


}
