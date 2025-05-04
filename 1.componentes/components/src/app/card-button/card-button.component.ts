import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  @Input({required: true, alias: 'text'})
  buttonText: string = ''

  @Input({required: true, alias: 'style'})
  buttonStyle: 'white' | 'purple' = 'white'

  @Output('clicked') 
  buttonClickedEmitter = new EventEmitter<void>()

  onButtonClicked(){
    this.buttonClickedEmitter.emit();

  }
}
