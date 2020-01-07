import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfsByIndustryComponent } from './etfs-by-industry.component';

describe('EtfsByIndustryComponent', () => {
  let component: EtfsByIndustryComponent;
  let fixture: ComponentFixture<EtfsByIndustryComponent>;

  beforeEach(async(() => {
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
