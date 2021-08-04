import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparplanKostenPerBrokerComponent } from './sparplan-kosten-per-broker.component';

describe('SparplanKostenPerBrokerComponent', () => {
  let component: SparplanKostenPerBrokerComponent;
  let fixture: ComponentFixture<SparplanKostenPerBrokerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanKostenPerBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanKostenPerBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
