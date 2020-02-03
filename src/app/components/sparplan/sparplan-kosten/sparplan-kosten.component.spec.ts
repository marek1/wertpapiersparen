import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanKostenComponent } from './sparplan-kosten.component';

describe('SparplanKostenComponent', () => {
  let component: SparplanKostenComponent;
  let fixture: ComponentFixture<SparplanKostenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanKostenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanKostenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
