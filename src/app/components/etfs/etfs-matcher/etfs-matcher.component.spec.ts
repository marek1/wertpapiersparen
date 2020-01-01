import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfsMatcherComponent } from './etfs-matcher.component';

describe('EtfsMatcherComponent', () => {
  let component: EtfsMatcherComponent;
  let fixture: ComponentFixture<EtfsMatcherComponent>;

  beforeEach(async(() => {
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
