import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  //components sempre no declarations
  declarations: [
    AppComponent,
  ],
  // os modulos ficam nos imports
  imports: [
    BrowserModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
