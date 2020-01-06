import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfsByRegionComponent } from './etfs-by-region.component';

describe('EtfsByRegionComponent', () => {
  let component: EtfsByRegionComponent;
  let fixture: ComponentFixture<EtfsByRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfsByRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfsByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
