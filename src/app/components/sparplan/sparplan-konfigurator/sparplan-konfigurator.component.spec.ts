import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparplanKonfiguratorComponent } from './sparplan-konfigurator.component';

describe('SparplanKonfiguratorComponent', () => {
  let component: SparplanKonfiguratorComponent;
  let fixture: ComponentFixture<SparplanKonfiguratorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanKonfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanKonfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
