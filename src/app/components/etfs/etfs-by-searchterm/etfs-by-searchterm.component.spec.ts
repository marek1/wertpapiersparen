import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EtfsBySearchtermComponent } from './etfs-by-searchterm.component';

describe('EtfsBySearchtermComponent', () => {
  let component: EtfsBySearchtermComponent;
  let fixture: ComponentFixture<EtfsBySearchtermComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfsBySearchtermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfsBySearchtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
