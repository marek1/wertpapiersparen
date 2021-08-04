import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddToSparplanComponent } from './add-to-sparplan.component';

describe('AddToFavouritesComponent', () => {
  let component: AddToSparplanComponent;
  let fixture: ComponentFixture<AddToSparplanComponent>;

  beforeEach(waitForAsync(() => {
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
