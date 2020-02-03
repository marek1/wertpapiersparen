import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-richtig-sparen',
  templateUrl: './richtig-sparen.component.html',
  styleUrls: ['./richtig-sparen.component.scss']
})
export class RichtigSparenComponent implements OnInit {

  public show1: boolean;
  public show2: boolean;

  constructor() {
    this.show1 = true;
    this.show2 = false;
  }

  ngOnInit() {
  }

}
