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
  ROUTES_IN_AKTIEN_INVESTIEREN,
  ROUTES_RICHTIG_SPAREN,
  ROUTES_RISIKO_INVESTITION,
  ROUTES_WAS_SIND_AKTIEN,
  ROUTE_SAVING_PLAN_HOME,
  ROUTES_WAS_SIND_ETFS,
  ROUTES_SAVING_PLAN_COSTS,
  ROUTE_SAVING_PLAN_KONFIGURATOR, ROUTE_SAVING_PLAN_STARTER, ROUTE_SAVING_PLAN_MUSTER, ROUTE_MY_SAVING_PLAN_HOME
} from './routes';
import { BasketComponent } from './components/basket/basket.component';
import { RichtigSparenComponent } from './components/richtig-sparen/richtig-sparen.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';
import { SparplanHomeComponent } from './components/sparplan/sparplan-home/sparplan-home.component';
import { SparplanStarterComponent } from './components/sparplan/sparplan-starter/sparplan-starter.component';
import { SparplanKonfiguratorComponent } from './components/sparplan/sparplan-konfigurator/sparplan-konfigurator.component';

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
    path: ROUTE_MY_SAVING_PLAN_HOME,
    component: BasketComponent
  },
  {
    path: ROUTE_RANKING,
    component: RankingsComponent
  },
  {
    path: ROUTE_SAVING_PLAN_MUSTER,
    component: SparplanMusterComponent
  },
  {
    path: ROUTES_SAVING_PLAN_COSTS,
    component: SparplanKostenComponent
  },
  {
    path: ROUTE_SAVING_PLAN_HOME,
    component: SparplanHomeComponent
  },
  {
    path: ROUTE_SAVING_PLAN_STARTER,
    component: SparplanStarterComponent
  },
  {
    path: ROUTE_SAVING_PLAN_KONFIGURATOR,
    component: SparplanKonfiguratorComponent
  },
  {
    path: ROUTES_IN_AKTIEN_INVESTIEREN,
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
    path: ROUTES_WAS_SIND_ETFS,
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
