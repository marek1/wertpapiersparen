import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanStarterComponent } from './sparplan-starter.component';

describe('SparplanStarterComponent', () => {
  let component: SparplanStarterComponent;
  let fixture: ComponentFixture<SparplanStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
