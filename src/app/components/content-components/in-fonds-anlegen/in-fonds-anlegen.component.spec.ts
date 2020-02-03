import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFondsAnlegenComponent } from './in-fonds-anlegen.component';

describe('InFondsAnlegenComponent', () => {
  let component: InFondsAnlegenComponent;
  let fixture: ComponentFixture<InFondsAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFondsAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFondsAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
