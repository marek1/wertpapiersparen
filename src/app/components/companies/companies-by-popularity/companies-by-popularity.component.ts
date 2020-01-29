import { Component, OnInit } from '@angular/core';
import { Rankings } from '../../../data/rankings';
import { Ranking, ShareRank } from '../../../interfaces/ranking';
import { Companies } from '../../../data/companies';
import { Company } from '../../../interfaces/company';
import { ROUTE_RANKING } from '../../../app.routes';
import { lvmhCompany } from '../../../data/companies/eurostoxx50/lvmh';
import { nestleCompany } from '../../../data/companies/other/nestle';
import { abInbevCompany } from '../../../data/companies/eurostoxx50/abInbev';
import { unileverCompany } from '../../../data/companies/eurostoxx50/unilever';
import { keringCompany } from '../../../data/companies/eurostoxx50/kering';
import { deutscheTelekomCompany } from '../../../data/companies/dax/deutscheTelekom';
import { vwCompany } from '../../../data/companies/dax/vw';
import { daimlerCompany } from '../../../data/companies/dax/daimler';
import { nokiaCompany } from '../../../data/companies/eurostoxx50/nokia';

export interface Top10ListItem {
  id: number;
  name: string;
  isin: string;
  logo?: string;
}

export interface Top10GoodListItem extends Top10ListItem {
  counter: number;
  points: number;
}

@Component({
  selector: 'app-companies-by-popularity',
  templateUrl: './companies-by-popularity.component.html',
  styleUrls: ['./companies-by-popularity.component.scss']
})
export class CompaniesByPopularityComponent implements OnInit {

  public top10Good: Top10GoodListItem[];
  public top10Brands: Top10ListItem[];
  public show: {
    top10Good: boolean;
    top10Brands: boolean;
  };
  public ROUTE_RANKING = ROUTE_RANKING;

  constructor() {
    this.top10Good = [];
    this.top10Brands = [];
    this.show = {
      top10Good: false,
      top10Brands: false
    };
  }

  ngOnInit() {
    this.createTop10GoodList();
    this.createTop10BrandsList();
  }

  createTop10GoodList() {
    /**
     * go through all rankings,
     * consider only those that
     * - appear in absolute lists, i.e. where maxResult = 1 (i.e. cdp)
     * - and are within first 50% of lists where maxResult > 1
     * THEN, filter only those that
     * - appear at least in 2 lists
     */
    Rankings.map((ranking: Ranking) => {
      ranking.results.map((result: ShareRank, counter: number) => {
        if (ranking.maxResult === 1 || (ranking.maxResult > 1 && counter < (ranking.results.length / 2))) {
          this.updateTop10GoodList(result, ranking.maxResult);
        }
      });
    });
    // then sort by lowest
    this.top10Good = this.top10Good.sort((a: Top10GoodListItem, b: Top10GoodListItem) => {
      // counter is the number of times it appeared
      // and points is the number of points achieved (the higher the better)
      if (a.points < b.points) {
        return 1;
      } else {
        return -1;
      }
      return 0;
    });
  }

  updateTop10GoodList(result: ShareRank, maxPoints: number): void {
    const foundIndex = this.top10Good.findIndex((top10GoodItem: Top10GoodListItem) => top10GoodItem.id === result.id);
    if (foundIndex === -1) {
      this.top10Good.push({
        id: result.id,
        name: result.name,
        isin: result.isin,
        logo: this.getLogoFor(result.id),
        counter: 1,
        points: this.calculatePoints(result.points, maxPoints)
      });
    } else {
      this.top10Good[foundIndex].counter = this.top10Good[foundIndex].counter++;
      this.top10Good[foundIndex].points += this.calculatePoints(result.points, maxPoints);
    }
  }

  createTop10BrandsList() {
    // Source: https://de.statista.com/statistik/daten/studie/202750/umfrage/wertvollste-unternehmen-in-europa/
    const fromStatista = [
      lvmhCompany.id,
      nestleCompany.id,
      abInbevCompany.id,
      unileverCompany.id,
      keringCompany.id,
      deutscheTelekomCompany.id,
      vwCompany.id,
      daimlerCompany.id,
      nokiaCompany.id
    ];
    fromStatista.map((id: number) => {
      Companies.map((result: Company) => {
        if (result.id === id) {
          this.top10Brands.push({
            id: result.id,
            name: result.name,
            isin: result.isin,
            logo: this.getLogoFor(result.id),
          });
        }
      });
    });
  }

  calculatePoints(points: number, maxPoints: number): number {
    // add up to 100
    const quotient = 100 / maxPoints;
    return points * quotient;
  }

  getLogoFor(id: number) {
    return Companies.filter((comp: Company) => comp.id === id)[0].logo;
  }

}
