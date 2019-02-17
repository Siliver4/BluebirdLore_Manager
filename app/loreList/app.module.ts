import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ShadowCardDirective } from './bluebird-shadow-card.directive';
import { LoreCategoryColorPipe } from '../pipes/lore-category-color.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ShadowCardDirective, LoreCategoryColorPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }