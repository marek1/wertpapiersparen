import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfsMatcherComponent } from './etfs-matcher.component';

describe('EtfsMatcherComponent', () => {
  let component: EtfsMatcherComponent;
  let fixture: ComponentFixture<EtfsMatcherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfsMatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfsMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
