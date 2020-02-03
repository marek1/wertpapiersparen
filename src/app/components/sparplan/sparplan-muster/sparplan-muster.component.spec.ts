import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanMusterComponent } from './sparplan-muster.component';

describe('SparplanMusterComponent', () => {
  let component: SparplanMusterComponent;
  let fixture: ComponentFixture<SparplanMusterComponent>;

  beforeEach(async(() => {
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
