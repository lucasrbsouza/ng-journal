import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardComponent } from '../card/card.component';



@NgModule({
  declarations: [
    CardButtonComponent,
    CardComponent
  ],
  exports:[
    CardButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
