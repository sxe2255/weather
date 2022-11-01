import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BigCardComponent } from './components/cards/big-card/big-card.component';
import { SmallCardComponent } from './components/cards/small-card/small-card.component';
import { CardsComponent } from './components/cards/cards.component';
import { ImageCardComponent } from './components/cards/image-card/image-card.component';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';
import { FeelComponent } from './components/cards/big-card/feel/feel.component';
import { WindComponent } from './components/cards/big-card/wind/wind.component';
import { CloudinessComponent } from './components/cards/big-card/cloudiness/cloudiness.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    SmallCardComponent,
    CardsComponent,
    ImageCardComponent,
    KelvinToCelsiusPipe,
    FeelComponent,
    WindComponent,
    CloudinessComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
