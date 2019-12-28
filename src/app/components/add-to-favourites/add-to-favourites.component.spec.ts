import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavouritesComponent } from './add-to-favourites.component';

describe('AddToFavouritesComponent', () => {
  let component: AddToFavouritesComponent;
  let fixture: ComponentFixture<AddToFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
