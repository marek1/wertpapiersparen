import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfsResultComponent } from './etfs-result.component';

describe('EtfsResultComponent', () => {
  let component: EtfsResultComponent;
  let fixture: ComponentFixture<EtfsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
