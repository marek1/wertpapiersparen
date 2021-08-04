import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfsByIndustryComponent } from './etfs-by-industry.component';

describe('EtfsByIndustryComponent', () => {
  let component: EtfsByIndustryComponent;
  let fixture: ComponentFixture<EtfsByIndustryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfsByIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfsByIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
