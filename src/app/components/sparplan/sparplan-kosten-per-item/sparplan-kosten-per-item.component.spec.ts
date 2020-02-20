import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanKostenPerItemComponent } from './sparplan-kosten-per-item.component';

describe('SparplanKostenPerItemComponent', () => {
  let component: SparplanKostenPerItemComponent;
  let fixture: ComponentFixture<SparplanKostenPerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanKostenPerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanKostenPerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
