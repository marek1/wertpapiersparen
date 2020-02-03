import { Component, OnInit } from '@angular/core';
import { SavingplanBroker } from '../../../data/savingplanBroker';
import { Options } from 'ng5-slider';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-sparplan-kosten',
  templateUrl: './sparplan-kosten.component.html',
  styleUrls: ['./sparplan-kosten.component.scss']
})
export class SparplanKostenComponent implements OnInit {

  public sparplanBroker = SavingplanBroker;
  public sparplanSum$: Observable<number>;

  public value: number;
  public options: Options;

  constructor(private store: Store<fromRoot.AppState>) {
    this.value = 50;
    this.options = {
      floor: 0,
      ceil: 500
    };
  }

  ngOnInit() {
    this.sparplanSum$ = this.store.pipe(select(fromRoot.getSparplanSum));
    this.sparplanSum$.subscribe((val: number) => {
      console.log('val : ', val);
      if (val !== undefined && !isNaN(val)) {
        this.value = val;
      }
    });
  }

}
