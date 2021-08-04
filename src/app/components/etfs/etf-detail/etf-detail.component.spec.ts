import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfDetailComponent } from './etf-detail.component';

describe('EtfDetailComponent', () => {
  let component: EtfDetailComponent;
  let fixture: ComponentFixture<EtfDetailComponent>;

  beforeEach(waitForAsync(() => {
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
