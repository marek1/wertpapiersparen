import { Component, OnInit } from '@angular/core';
import { Rankings } from '../../data/rankings';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  public Rankings = Rankings;

  constructor() { }

  ngOnInit() {
  }

}
