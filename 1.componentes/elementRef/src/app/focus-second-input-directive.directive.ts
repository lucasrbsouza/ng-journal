import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInputDirective]'
})
export class FocusSecondInputDirectiveDirective implements OnInit {

  @HostBinding('style.backgroundColor')
  bgColor = 'blue'
  @HostBinding("textContent")
  text = "div host binding"

  constructor(private _elRef: ElementRef) {}
  ngOnInit(): void {
    console.log(this._elRef);
  }


}
