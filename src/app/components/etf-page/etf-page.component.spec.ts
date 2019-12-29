import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfPageComponent } from './etf-page.component';

describe('EtfPageComponent', () => {
  let component: EtfPageComponent;
  let fixture: ComponentFixture<EtfPageComponent>;

  beforeEach(async(() => {
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
