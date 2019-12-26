import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { AllCompanies } from '../../data/companies';
import { Company } from '../../interfaces/company';
import { BasketActions } from '../../actions';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';

interface CompanyProduct {
  company: Company;
  product: Product;
}

@Component({
  selector: 'app-by-product',
  templateUrl: './by-product.component.html',
  styleUrls: ['./by-product.component.scss']
})
export class ByProductComponent implements OnInit {

  private products: CompanyProduct[];
  public favouredSecuritiesIdList$: Observable<number[]>;
  public filteredProducts: CompanyProduct[];
  public filterArgs = ['Alle', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public lastFilterArgs: string;

  constructor(private store: Store<fromRoot.AppState>) {
    this.products = [];
    AllCompanies.map((company: Company) => {
      if (company.products.length > 0) {
        company.products.map((product) => {
          this.products.push({
            company,
            product
          });
        });
      }
    });
    this.sortAlphabetically();
  }

  ngOnInit() {
    this.favouredSecuritiesIdList$ = this.store.pipe(select(fromRoot.getFavouredSecuritiesAsList));
    this.filter(this.filterArgs[0]);
  }

  filter(filterArg: string) {
    this.lastFilterArgs = filterArg;
    if (filterArg === this.filterArgs[0]) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter((companyProduct) => {
        return companyProduct.product.name[0].toLowerCase() === filterArg.toLowerCase();
      });
    }
  }

  sortAlphabetically() {
    this.products = this.products.sort((a: CompanyProduct, b: CompanyProduct) => {
      if (a.product.name < b.product.name) { return -1; }
      if (a.product.name > b.product.name) { return 1; }
      return 0;
    });
  }

  addToFavourites(company: Company) {
    this.store.dispatch(BasketActions.addToFavourites({company}));
  }

  removeFromFavourites(company: Company) {
    this.store.dispatch(BasketActions.removeFromFavourites({company}));
  }
}
