import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfsHomeComponent } from './etfs-home.component';

describe('EtfsHomeComponent', () => {
  let component: EtfsHomeComponent;
  let fixture: ComponentFixture<EtfsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
