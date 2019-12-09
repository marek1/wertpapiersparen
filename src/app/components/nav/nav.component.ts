import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public favouredSecuritiesIdList$: Observable<number[]>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.favouredSecuritiesIdList$ = this.store.pipe(select(fromRoot.getFavouredSecuritiesAsList));
  }

}
