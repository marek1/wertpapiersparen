import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SecurityDetailsComponent } from './components/security-details/security-details.component';

export const appRoutes = [
  {
    path: 'wertpapier/:name/:id',
    component: SecurityDetailsComponent
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
