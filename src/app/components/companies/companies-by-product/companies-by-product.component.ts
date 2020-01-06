import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { Company } from '../../../interfaces/company';
import { CompaniesActions } from '../../../actions';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs';
import { ProductFilters } from '../../../data/product-filters';
import { Companies } from '../../../data/companies';

interface CompanyProduct {
  company: Company;
  product: Product;
}

@Component({
  selector: 'app-companies-by-product',
  templateUrl: './companies-by-product.component.html',
  styleUrls: ['./companies-by-product.component.scss']
})
export class CompaniesByProductComponent implements OnInit {

  private products: CompanyProduct[];
  public productFilter$: Observable<string>;
  public filteredProducts: CompanyProduct[];
  public filterArgs = ProductFilters;

  constructor(private store: Store<fromRoot.AppState>) {
    this.products = [];
    Companies.map((company: Company) => {
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
    this.productFilter$ = this.store.pipe(select(fromRoot.getCompaniesProductFilter));
    this.productFilter$.subscribe((productFilter: string) => {
      this.filter(productFilter);
    });
  }

  filter(filterArg: string) {
    this.store.dispatch(CompaniesActions.updateProductFilter({productFilter: filterArg}));
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

}
