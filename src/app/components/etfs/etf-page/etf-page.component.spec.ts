import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfPageComponent } from './etf-page.component';

describe('EtfPageComponent', () => {
  let component: EtfPageComponent;
  let fixture: ComponentFixture<EtfPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
