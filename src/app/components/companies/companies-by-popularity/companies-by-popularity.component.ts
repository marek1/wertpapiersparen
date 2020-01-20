import { Component, OnInit } from '@angular/core';
import { Rankings } from '../../../data/rankings';
import { Ranking, ShareRank } from '../../../interfaces/ranking';

interface FinalListItem {
  id: number;
  name: string;
  isin: string;
  counter: number;
  points: number;
}

@Component({
  selector: 'app-companies-by-popularity',
  templateUrl: './companies-by-popularity.component.html',
  styleUrls: ['./companies-by-popularity.component.scss']
})
export class CompaniesByPopularityComponent implements OnInit {

  public finalList: FinalListItem[];

  constructor() {
    this.finalList = [];
  }

  ngOnInit() {
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
          this.updateList(result, ranking.maxResult);
        }
      });
    });
    // then sort by lowest
    this.finalList = this.finalList.sort((a: FinalListItem, b: FinalListItem) => {
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

  updateList(result: ShareRank, maxPoints: number): void {
    const foundIndex = this.finalList.findIndex((finalListItem: FinalListItem) => finalListItem.id === result.id);
    if (foundIndex === -1) {
      this.finalList.push({
        id: result.id,
        name: result.name,
        isin: result.isin,
        counter: 1,
        points: this.calculatePoints(result.points, maxPoints)
      });
    } else {
      this.finalList[foundIndex].counter = this.finalList[foundIndex].counter++;
      this.finalList[foundIndex].points += this.calculatePoints(result.points, maxPoints);
    }
  }

  calculatePoints(points: number, maxPoints: number): number {
    // add up to 100
    const quotient = 100 / maxPoints;
    return points * quotient;
  }

}
