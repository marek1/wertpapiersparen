import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparplanKostenPerItemComponent } from './sparplan-kosten-per-item.component';

describe('SparplanKostenPerItemComponent', () => {
  let component: SparplanKostenPerItemComponent;
  let fixture: ComponentFixture<SparplanKostenPerItemComponent>;

  beforeEach(waitForAsync(() => {
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
