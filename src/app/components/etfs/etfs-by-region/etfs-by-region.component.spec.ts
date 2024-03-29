import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfsByRegionComponent } from './etfs-by-region.component';

describe('EtfsByRegionComponent', () => {
  let component: EtfsByRegionComponent;
  let fixture: ComponentFixture<EtfsByRegionComponent>;

  beforeEach(waitForAsync(() => {
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
