import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPercentageComponent } from './get-percentage.component';

describe('GetPercentageComponent', () => {
  let component: GetPercentageComponent;
  let fixture: ComponentFixture<GetPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
