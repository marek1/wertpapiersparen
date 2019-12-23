import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROOT_REDUCERS, metaReducers } from './reducers';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { ByIndustryComponent } from './components/by-industry/by-industry.component';
import { SecuritiesListInIndustryComponent } from './components/securities-list-in-industry/securities-list-in-industry.component';
import { SecurityDetailsComponent } from './components/security-details/security-details.component';
import { ChartsModule } from 'ng2-charts';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { BasketEffects } from './effects/basket.effects';
import { BasketService } from './services/basket.service';
import { PriceService } from './services/price.service';
import { IndustryChartComponent } from './components/industry-chart/industry-chart.component';
import { IndustryService } from './services/industry.service';
import { BySearchtermComponent } from './components/by-searchterm/by-searchterm.component';
import { ByProductComponent } from './components/by-product/by-product.component';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    ByIndustryComponent,
    SecuritiesListInIndustryComponent,
    SecurityDetailsComponent,
    FavouritesComponent,
    NumberInputComponent,
    PriceDisplayComponent,
    IndustryChartComponent,
    BySearchtermComponent,
    ByProductComponent
  ],
  imports: [
    FormsModule,
    ChartsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([BasketEffects]),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    BasketService,
    PriceService,
    IndustryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
