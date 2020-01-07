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
import { ChartsModule } from 'ng2-charts';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { BasketEffects } from './effects/basket.effects';
import { BasketService } from './services/basket.service';
import { PriceService } from './services/price.service';
import { IndustryService } from './services/industry.service';
import { AddToFavouritesComponent } from './components/add-to-favourites/add-to-favourites.component';
import { EtfDetailComponent } from './components/etfs/etf-detail/etf-detail.component';
import { EtfPageComponent } from './components/etfs/etf-page/etf-page.component';
import { CompanyPageComponent } from './components/companies/company-page/company-page.component';
import { CompaniesHomeComponent } from './components/companies/companies-home/companies-home.component';
import { EtfsHomeComponent } from './components/etfs/etfs-home/etfs-home.component';
import { EtfsBySearchtermComponent } from './components/etfs/etfs-by-searchterm/etfs-by-searchterm.component';
import { CompaniesByIndustryComponent } from './components/companies/companies-by-industry/companies-by-industry.component';
import { CompaniesBySearchtermComponent } from './components/companies/companies-by-searchterm/companies-by-searchterm.component';
import { CompaniesByProductComponent } from './components/companies/companies-by-product/companies-by-product.component';
import { CompaniesListInIndustryComponent } from './components/companies/companies-list-in-industry/companies-list-in-industry.component';
import { CompanyDetailsComponent } from './components/companies/company-details/company-details.component';
import { EtfsMatcherComponent } from './components/etfs/etfs-matcher/etfs-matcher.component';
import { StocksIndustryChartComponent } from './components/stocks-industry-chart/stocks-industry-chart.component';
import { EtfSectorChartComponent } from './components/etf-sector-chart/etf-sector-chart.component';
import { EtfsByRegionComponent } from './components/etfs/etfs-by-region/etfs-by-region.component';
import { EtfsResultComponent } from './components/etfs/etfs-result/etfs-result.component';
import { EtfsByIndustryComponent } from './components/etfs/etfs-by-industry/etfs-by-industry.component';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    CompaniesByIndustryComponent,
    CompaniesListInIndustryComponent,
    CompanyDetailsComponent,
    FavouritesComponent,
    NumberInputComponent,
    PriceDisplayComponent,
    StocksIndustryChartComponent,
    CompaniesBySearchtermComponent,
    CompaniesByProductComponent,
    AddToFavouritesComponent,
    EtfDetailComponent,
    EtfPageComponent,
    CompanyPageComponent,
    CompaniesHomeComponent,
    EtfsHomeComponent,
    EtfsBySearchtermComponent,
    EtfsMatcherComponent,
    EtfSectorChartComponent,
    EtfsByRegionComponent,
    EtfsResultComponent,
    EtfsByIndustryComponent
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
