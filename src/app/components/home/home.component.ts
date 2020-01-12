import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public show: {
    whatIsASavingPlan: boolean;
    whatIsAStock: boolean;
    whatIsAnEtf: boolean;
  };

  constructor() {
    this.show = {
      whatIsASavingPlan: false,
      whatIsAStock: false,
      whatIsAnEtf: false
    };
  }

  ngOnInit() {
  }

}


