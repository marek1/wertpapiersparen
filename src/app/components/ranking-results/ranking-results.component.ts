import { Component, Input } from '@angular/core';
import { ShareRank } from '../../interfaces/ranking';
import { ROUTE_COMPANIES } from '../../routes';

@Component({
  selector: 'app-ranking-results',
  templateUrl: './ranking-results.component.html',
  styleUrls: ['./ranking-results.component.scss']
})
export class RankingResultsComponent {

  @Input() results: ShareRank[];
  @Input() maxScore: number;
  @Input() unit: string;

  public showResults: boolean;

  public ROUTE_COMPANIES = ROUTE_COMPANIES;

  constructor() {
    this.showResults = false;
  }

}
