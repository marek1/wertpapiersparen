import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingResultsComponent } from './ranking-results.component';

describe('RankingResultsComponent', () => {
  let component: RankingResultsComponent;
  let fixture: ComponentFixture<RankingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
