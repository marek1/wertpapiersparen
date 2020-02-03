import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtigSparenComponent } from './richtig-sparen.component';

describe('RichtigSparenComponent', () => {
  let component: RichtigSparenComponent;
  let fixture: ComponentFixture<RichtigSparenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtigSparenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtigSparenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
