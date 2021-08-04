import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfsByPopularityComponent } from './etfs-by-popularity.component';

describe('EtfsByPopularityComponent', () => {
  let component: EtfsByPopularityComponent;
  let fixture: ComponentFixture<EtfsByPopularityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfsByPopularityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfsByPopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
