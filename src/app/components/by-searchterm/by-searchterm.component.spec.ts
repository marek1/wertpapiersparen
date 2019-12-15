import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BySearchtermComponent } from './by-searchterm.component';

describe('BySearchtermComponent', () => {
  let component: BySearchtermComponent;
  let fixture: ComponentFixture<BySearchtermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BySearchtermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BySearchtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
