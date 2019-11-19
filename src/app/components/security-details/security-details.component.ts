import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCompanies } from '../../data/companies';
import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.scss']
})
export class SecurityDetailsComponent implements OnInit {

  public company: Company;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id: ', id);
    if (id && !isNaN(parseInt(id, 10))) {
      this.company = AllCompanies.filter((company: Company) => company.id === parseInt(id, 10))[0];
    }
  }

}
