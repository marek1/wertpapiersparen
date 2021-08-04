import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparplanMusterComponent } from './sparplan-muster.component';

describe('SparplanMusterComponent', () => {
  let component: SparplanMusterComponent;
  let fixture: ComponentFixture<SparplanMusterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanMusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanMusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
