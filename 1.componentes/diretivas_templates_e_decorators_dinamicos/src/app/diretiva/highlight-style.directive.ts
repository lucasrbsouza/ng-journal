import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightStyle]'
})
export class HighlightStyleDirective {

  constructor() { }

  //@HostBinding('attr.style')
  //attrStyle = "background-color: orange; color: white"


  @HostBinding('style')
  propStyle = "background-color: orange; color: white"
}
