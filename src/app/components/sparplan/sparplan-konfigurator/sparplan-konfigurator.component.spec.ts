import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanKonfiguratorComponent } from './sparplan-konfigurator.component';

describe('SparplanKonfiguratorComponent', () => {
  let component: SparplanKonfiguratorComponent;
  let fixture: ComponentFixture<SparplanKonfiguratorComponent>;

  beforeEach(async(() => {
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
