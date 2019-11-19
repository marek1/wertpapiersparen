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
export class ByIndustryComponent {

  // holding the level of selected industries
  public industriesInThisLevel: Industry[];
  public selectedIndustries: SelectedIndustry[];

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

  setIndustries() {
    this.industriesInThisLevel = [];
    if (this.selectedIndustries.length === 1) {
      this.industriesInThisLevel = industries;
    } else {
      this.industriesInThisLevel = this.iterateThroughChildren(industries);
    }
  }

  iterateThroughChildren(dataArray: Industry[]): Industry[] {
    const idToFind = this.selectedIndustries[this.selectedIndustries.length - 1].id;
    for (const dataItem of dataArray) {
      if (dataItem.id === idToFind) {
        return dataItem.subIndustries;
        break;
      }
    }
    let concatSubs = [];
    for (const dataItem1 of dataArray) {
      if (dataItem1.subIndustries) {
        concatSubs = concatSubs.concat(dataItem1.subIndustries);
      }
    }
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
    this.setIndustries();
  }

  goToBreadcrumb(i: number) {
    this.selectedIndustries = this.selectedIndustries.slice(0, i + 1);
    this.setIndustries();
  }

}
