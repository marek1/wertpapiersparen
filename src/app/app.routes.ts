import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { EtfPageComponent } from './components/etfs/etf-page/etf-page.component';
import { CompanyPageComponent } from './components/companies/company-page/company-page.component';
import { CompaniesHomeComponent } from './components/companies/companies-home/companies-home.component';
import { EtfsHomeComponent } from './components/etfs/etfs-home/etfs-home.component';
import { SparplanKostenComponent } from './components/sparplan/sparplan-kosten/sparplan-kosten.component';
import { SparplanMusterComponent } from './components/sparplan/sparplan-muster/sparplan-muster.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import {
  ROUTE_COMPANIES,
  ROUTE_ETFS,
  ROUTE_RANKING,
  ROUTES_INVESTMENTFONDS,
  ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN,
  ROUTES_RICHTIG_SPAREN,
  ROUTES_RISIKO_INVESTITION,
  ROUTES_WAS_SIND_AKTIEN
} from './routes';
import { BasketComponent } from './components/basket/basket.component';
import { RichtigSparenComponent } from './components/richtig-sparen/richtig-sparen.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';

export const appRoutes = [
  {
    path: 'unternehmen/:name/:id',
    component: CompanyPageComponent
  },
  {
    path: 'etf/:name/:id',
    component: EtfPageComponent,
  },
  {
    path: 'mein-sparplan',
    component: BasketComponent
  },
  {
    path: ROUTE_RANKING,
    component: RankingsComponent
  },
  {
    path: 'muster-sparplan',
    component: SparplanMusterComponent
  },
  {
    path: 'kosten-eines-sparplans',
    component: SparplanKostenComponent
  },
  {
    path: ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN,
    component: ContentComponentComponent
  },
  {
    path: ROUTES_RISIKO_INVESTITION,
    component: ContentComponentComponent
  },
  {
    path: ROUTES_INVESTMENTFONDS,
    component: ContentComponentComponent
  },
  {
    path: ROUTES_WAS_SIND_AKTIEN,
    component: ContentComponentComponent
  },
  {
    path: ROUTES_RICHTIG_SPAREN,
    component: RichtigSparenComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ROUTE_COMPANIES,
    component: CompaniesHomeComponent
  },
  {
    path: ROUTE_ETFS,
    component: EtfsHomeComponent
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
