import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SecurityDetailsComponent } from './components/security-details/security-details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

export const appRoutes = [
  {
    path: 'unternehmen/:name/:id',
    component: SecurityDetailsComponent
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
