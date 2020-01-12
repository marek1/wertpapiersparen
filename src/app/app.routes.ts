import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { EtfPageComponent } from './components/etfs/etf-page/etf-page.component';
import { CompanyPageComponent } from './components/companies/company-page/company-page.component';
import { CompaniesHomeComponent } from './components/companies/companies-home/companies-home.component';
import { EtfsHomeComponent } from './components/etfs/etfs-home/etfs-home.component';
import { SparplanComponent } from './components/sparplan/sparplan.component';
import { SparplanKostenComponent } from './components/sparplan-kosten/sparplan-kosten.component';

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
    path: 'sparplan',
    component: SparplanComponent
  },
  {
    path: 'kosten-eines-sparplans',
    component: SparplanKostenComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'unternehmen',
    component: CompaniesHomeComponent
  },
  {
    path: 'etfs',
    component: EtfsHomeComponent
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
