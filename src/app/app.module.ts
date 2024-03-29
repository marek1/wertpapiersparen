import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { metaReducers, ROOT_REDUCERS } from './reducers';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { ChartsModule } from 'ng2-charts';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { BasketEffects } from './effects/basket.effects';
import { BasketService } from './services/basket.service';
import { PriceService } from './services/price.service';
import { IndustryService } from './services/industry.service';
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
import { AddToSparplanComponent } from './components/add-to-sparplan/add-to-sparplan.component';
import { SparplanChartComponent } from './components/sparplan/sparplan-chart/sparplan-chart.component';
import { SparplanKostenComponent } from './components/sparplan/sparplan-kosten/sparplan-kosten.component';
import { SparplanKostenDetailsComponent } from './components/sparplan/sparplan-kosten-details/sparplan-kosten-details.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SparplanKostenPerBrokerComponent } from './components/sparplan/sparplan-kosten-per-broker/sparplan-kosten-per-broker.component';
import { CompaniesByPopularityComponent } from './components/companies/companies-by-popularity/companies-by-popularity.component';
import { EtfsByPopularityComponent } from './components/etfs/etfs-by-popularity/etfs-by-popularity.component';
import { SparplanMusterComponent } from './components/sparplan/sparplan-muster/sparplan-muster.component';
import { SecurityListItemComponent } from './components/security-list-item/security-list-item.component';
import { SparplanService } from './services/sparplan.service';
import { GetSavingrateComponent } from './components/get-savingrate/get-savingrate.component';
import { CompanyIndustriesComponent } from './components/companies/company-industries/company-industries.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { RankingResultsComponent } from './components/ranking-results/ranking-results.component';
import { SparplanHomeComponent } from './components/sparplan/sparplan-home/sparplan-home.component';
import { BasketComponent } from './components/basket/basket.component';
import { RichtigSparenComponent } from './components/richtig-sparen/richtig-sparen.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';
import { SparplanSumComponent } from './components/sparplan/sparplan-sum/sparplan-sum.component';
import { SparplanKonfiguratorComponent } from './components/sparplan/sparplan-konfigurator/sparplan-konfigurator.component';
import { SparplanKostenPerItemComponent } from './components/sparplan/sparplan-kosten-per-item/sparplan-kosten-per-item.component';

registerLocaleData(localeDe, 'de');

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    CompaniesByIndustryComponent,
    CompaniesListInIndustryComponent,
    CompanyDetailsComponent,
    BasketComponent,
    AddToSparplanComponent,
    NumberInputComponent,
    PriceDisplayComponent,
    StocksIndustryChartComponent,
    CompaniesBySearchtermComponent,
    CompaniesByProductComponent,
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
    EtfsByIndustryComponent,
    GetSavingrateComponent,
    SparplanChartComponent,
    SparplanKostenComponent,
    SparplanKostenDetailsComponent,
    SparplanKostenPerBrokerComponent,
    CompaniesByPopularityComponent,
    EtfsByPopularityComponent,
    SparplanMusterComponent,
    SecurityListItemComponent,
    CompanyIndustriesComponent,
    RankingsComponent,
    RankingResultsComponent,
    SparplanHomeComponent,
    RichtigSparenComponent,
    ContentComponentComponent,
    SparplanSumComponent,
    SparplanKonfiguratorComponent,
    SparplanKostenPerItemComponent
  ],
  imports: [
    FormsModule,
    ChartsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    EffectsModule.forRoot([BasketEffects]),
    HttpClientModule,
    ReactiveFormsModule,
    Ng5SliderModule
  ],
  providers: [
    BasketService,
    PriceService,
    IndustryService,
    SparplanService,
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
