import { Component, OnInit } from '@angular/core';
import { Industry } from '../../interfaces/industry';
import { industries } from '../../data/industries';

import * as _ from 'lodash';
import { of } from 'rxjs';


interface SelectedIndustry {
  id: number;
  name: string;
}

@Component({
  selector: 'app-by-industry',
  templateUrl: './by-industry.component.html',
  styleUrls: ['./by-industry.component.scss']
})
export class ByIndustryComponent implements OnInit {

  // holding the level of selected industries
  public selectedIndustries: SelectedIndustry[];
  public industriesInThisLevel: Industry[];
  public AllIndustries = industries;

  constructor() {
    this.industriesInThisLevel = [];
    this.selectedIndustries = [
      {
        id: 0,
        name: 'Alle Industrien'
      }
    ];
    this.setIndustries();
  }

  ngOnInit() {
  }


  setIndustries() {
    this.industriesInThisLevel = [];
    if (this.selectedIndustries.length === 1) {
      this.industriesInThisLevel = this.AllIndustries;
    } else {
      this.industriesInThisLevel = this.iterateThroughChildren(this.AllIndustries);
    }
  }

  iterateThroughChildren(dataArray: Industry[]): Industry[] {
    const idToFind = this.selectedIndustries[this.selectedIndustries.length - 1].id;
    console.log('idToFind : ', idToFind);

    for (const dataItem of dataArray) {
      if (dataItem.id === idToFind) {
        return dataItem.subIndustries;
        break;
      }
    }

    console.log('otherwise go through  children');
    let concatSubs = [];
    for (const dataItem1 of dataArray) {
      if (dataItem1.subIndustries) {
        concatSubs = concatSubs.concat(dataItem1.subIndustries);
      }
    }
    console.log('concatSubs : ', concatSubs);
    // for (const dataItem2 of concatSubs) {
    return this.iterateThroughChildren(concatSubs);
  }

  goThroughSelectedIndustries(obj: any) {
    const idToFind = this.selectedIndustries[this.selectedIndustries.length - 1].id;

  }

  openIndustry(selectedIndustry: Industry) {
    this.selectedIndustries.push({
      id: selectedIndustry.id,
      name: selectedIndustry.description
    });
    console.log('this.selectedIndustries: ', this.selectedIndustries);
    this.setIndustries();
  }

  goToBreadcrumb(i: number) {
    this.selectedIndustries = this.selectedIndustries.slice(0, i + 1);
    this.setIndustries();
  }
}
