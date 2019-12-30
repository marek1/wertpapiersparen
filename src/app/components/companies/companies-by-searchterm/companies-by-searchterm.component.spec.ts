import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompaniesBySearchtermComponent } from './companies-by-searchterm.component';

describe('CompaniesBySearchtermComponent', () => {
  let component: CompaniesBySearchtermComponent;
  let fixture: ComponentFixture<CompaniesBySearchtermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesBySearchtermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesBySearchtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
