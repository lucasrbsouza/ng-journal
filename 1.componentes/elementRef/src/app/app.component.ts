import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('minhaDiv')
    divEl!: ElementRef<HTMLDivElement>;

    constructor(private readonly _elRef: ElementRef) {}
  
    ngOnInit(): void {
     console.log(this._elRef);
     const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement
     console.log(divEl);
     
     divEl.textContent = "sou outra div"
     divEl.style.backgroundColor = "blue"
     divEl.style.color = "white"

     divEl.addEventListener('click', ()=>{
      alert("clique")
     })
     
    }

    ngAfterViewInit(): void {
     this.divEl.nativeElement.style.backgroundColor = "orange"
     this.divEl.nativeElement.textContent = "sou uma div"
     this.divEl.nativeElement.className = "minha-div"
    }
}
