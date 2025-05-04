import { Component, EventEmitter, INJECTOR, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({required: true, alias: 'tipo'})
  tipo: string = ''
  
  @Input({required:true, alias:'preco'})
  preco: number = 0

  @Input({required: false})
  cardStyle: 'white' | 'orange' = 'white'
  
  @Input() beneficios: {
    projetos: number;
    suporte: string;
    acesso: string;
  } = {
    projetos: 0,
    suporte: '',
    acesso: ''
  };

  @Output()
  buttonCLickedEmiter = new EventEmitter<void>()
  buttonClicked(){
    this.buttonCLickedEmiter.emit()
  }
}
