import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfDetailComponent } from './etf-detail.component';

describe('EtfDetailComponent', () => {
  let component: EtfDetailComponent;
  let fixture: ComponentFixture<EtfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
