import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisikenBeachtenComponent } from './risiken-beachten.component';

describe('RisikenBeachtenComponent', () => {
  let component: RisikenBeachtenComponent;
  let fixture: ComponentFixture<RisikenBeachtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisikenBeachtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisikenBeachtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
