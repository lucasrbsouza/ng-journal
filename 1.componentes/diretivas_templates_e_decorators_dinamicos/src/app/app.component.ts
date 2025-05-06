import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{

  clicou(input: HTMLInputElement){
    alert(input.value)
  }

  @ViewChild('input_meu',)
  meuInputEl!: ElementRef<HTMLInputElement>;

  udpateInputText(){
    this.meuInputEl.nativeElement.value = 'Texto Ataualizado'
  }

  @ViewChild('filhoComp')
  filhoCompRef!: FilhoComponent

  hello(){
    this.filhoCompRef.dizerOi()
    this.filhoCompRef.message = "oii"
  }

  constructor(){

  }
 
  ngOnInit(): void {
    console.log(this.meuInputEl);
    
  }
  ngAfterViewInit(): void {
    this.meuInputEl.nativeElement.focus()
  }
}

