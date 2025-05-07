import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './filho/filho.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { HighlightDirective } from './diretiva/highlight.directive';
import { HighlightBotaoDirective } from './diretiva/highlight-botao.directive';
import { HighlightStyleDirective } from './highlight-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    DiretivaComponent,
    HighlightDirective,
    HighlightBotaoDirective,
    HighlightStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
