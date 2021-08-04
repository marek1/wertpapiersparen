import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';

@Component({
  selector: 'app-get-savingrate',
  templateUrl: './get-savingrate.component.html',
  styleUrls: ['./get-savingrate.component.scss']
})
export class GetSavingrateComponent implements OnInit {

  @Input() fav: AmountOfItem;
  @Input() totalPrice: number;
  @Input() sparplanSum: number;
  @Input() isTemplate: boolean;
  @Input() noOfSecurities: number;
  @Input() percentagesAreCorrect: boolean;
  @Output() numberChanged = new EventEmitter<number>();

  public currentAmount: number;

  constructor() {
  }

  ngOnInit() {
    this.currentAmount = this.fav.savingRate;
  }

  doEmit(anzahl: number) {
    this.numberChanged.emit(anzahl);
  }

}
