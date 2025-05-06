import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  clicou(input: HTMLInputElement){
    alert(input.value)
  }

  @ViewChild('input_meu')
  meuInputEl!: ElementRef<HTMLInputElement>;

  udpateInputText(){
    this.meuInputEl.nativeElement.value = 'Texto Ataualizado'
  }
}

