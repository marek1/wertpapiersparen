import { Component, OnInit } from '@angular/core';
import { Companies } from '../../../data/companies';
import { Company } from '../../../interfaces/company';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  public company: Company;

  constructor(public route: ActivatedRoute) {
    // get route changes
    this.route.params.subscribe((x) => {
      if (x && x.id !== undefined && x.id) {
        this.setCompany(x.id);
      }
    });
  }

  ngOnInit() {
    this.setCompany(this.route.snapshot.paramMap.get('id'));

  }

  setCompany(id) {
    if (id && !isNaN(parseInt(id, 10))) {
      this.company = Companies.filter((company: Company) => company.id === parseInt(id, 10))[0];
    }
  }

}
