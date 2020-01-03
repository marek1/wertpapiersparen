import { Component, OnInit } from '@angular/core';
import { findCompaniesInIndex } from '../../../data/companies';
import { Indices } from '../../../enums/indices';

@Component({
  selector: 'app-etfs-home',
  templateUrl: './etfs-home.component.html',
  styleUrls: ['./etfs-home.component.scss']
})
export class EtfsHomeComponent implements OnInit {

  constructor() {
    console.log('test : ', findCompaniesInIndex(Indices.DAX));
  }

  ngOnInit() {
  }

}
