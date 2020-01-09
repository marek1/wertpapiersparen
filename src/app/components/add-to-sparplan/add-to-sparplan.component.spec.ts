import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToSparplanComponent } from './add-to-favourites.component';

describe('AddToFavouritesComponent', () => {
  let component: AddToSparplanComponent;
  let fixture: ComponentFixture<AddToSparplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToSparplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToSparplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
