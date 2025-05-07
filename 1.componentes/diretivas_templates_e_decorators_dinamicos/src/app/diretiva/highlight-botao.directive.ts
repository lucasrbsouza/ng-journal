import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightBotao]'
})
export class HighlightBotaoDirective {

  constructor() { }

    //@HostBinding('attr.disable')
    //atrrDisbale = true
  

    // é melhor usar o property biding do que o atribute biding
    @HostBinding('disabled')
    propDisabale = false
  
}
