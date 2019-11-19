import { Component, OnInit } from '@angular/core';
import { SearchMethods } from '../../enums/searchMethods';
import { HelperService } from '../../services/helpers';
import { AllCompanies } from '../../data/companies';
import { industries } from '../../data/industries';
import { Industry } from '../../interfaces/industry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public selectedSearchMethod: string;
  public searchMethods: string[];
  public SearchMethods = SearchMethods;

  constructor(private helperService: HelperService) {
    this.searchMethods = this.helperService.EnumToArray(SearchMethods);
  }

  ngOnInit() {
  }

  setMethod(which: SearchMethods) {
    this.selectedSearchMethod = SearchMethods[which];
  }



}
