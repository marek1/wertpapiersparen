import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparplanHomeComponent } from './sparplan-home.component';

describe('SparplanHomeComponent', () => {
  let component: SparplanHomeComponent;
  let fixture: ComponentFixture<SparplanHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
