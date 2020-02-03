import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanKostenDetailsComponent } from './sparplan-kosten-details.component';

describe('SparplanKostenDetailsComponent', () => {
  let component: SparplanKostenDetailsComponent;
  let fixture: ComponentFixture<SparplanKostenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanKostenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanKostenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
