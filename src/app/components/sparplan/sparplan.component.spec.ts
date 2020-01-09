import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: SparplanComponent;
  let fixture: ComponentFixture<SparplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
