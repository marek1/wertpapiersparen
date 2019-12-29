import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SecurityDetailsComponent } from './components/security-details/security-details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { EtfPageComponent } from './components/etf-page/etf-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';

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
    path: 'favouriten',
    component: FavouritesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
