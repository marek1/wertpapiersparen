import { Component, Input, OnInit } from '@angular/core';
import { Ranking, ShareRank } from '../../interfaces/ranking';

@Component({
  selector: 'app-ranking-results',
  templateUrl: './ranking-results.component.html',
  styleUrls: ['./ranking-results.component.scss']
})
export class RankingResultsComponent implements OnInit {

  @Input() results: ShareRank[];
  @Input() maxScore: number;
  @Input() unit: string;

  public showResults: boolean;

  constructor() {
    this.showResults = false;
  }

  ngOnInit() {
  }

}
