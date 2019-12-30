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

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(parseInt(id, 10))) {
      this.company = Companies.filter((company: Company) => company.id === parseInt(id, 10))[0];
    }
  }

}
