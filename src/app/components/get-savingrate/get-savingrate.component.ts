import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';
import { BasketActions } from '../../actions';
import { Etf } from '../../interfaces/etf';
import { Company } from '../../interfaces/company';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';

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

  constructor(private priceService: PriceService,
              private store: Store<fromRoot.AppState>) {
  }

  ngOnInit() {
    console.log('this.sparplanSum : ', this.fav.savingRate);
    this.currentAmount = this.fav.savingRate;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if ((changes.totalPrice  && changes.totalPrice.currentValue) ||
  //     (changes.sparplanSum && changes.sparplanSum.currentValue) ||
  //     (changes.noOfSecurities && changes.noOfSecurities.currentValue)) {
  //     // amount is initially null if the item is an ETF
  //     console.log('this.fav.savingRate : ', this.fav.savingRate);
  //     if (!this.fav.savingRate) {
  //       this.calculateSum();
  //     } else {
  //       this.currentAmount = this.fav.savingRate;
  //     }
  //   }
  // }

  // calculateSum() {
  //   console.log('calculating sum with sparplansum being ', this.sparplanSum);
  //   this.currentAmount = this.sparplanSum * ((100 / this.noOfSecurities) / 100);
  //   if (!isNaN(this.currentAmount) && this.currentAmount !== this.sparplanSum) {
  //     this.doEmit(this.currentAmount);
  //   } else {
  //     this.currentAmount = 0;
  //   }
  // }

  doEmit(anzahl: number) {
    console.log('anzahl : ', anzahl, isNaN(anzahl));
    this.numberChanged.emit(anzahl);
  }

}
