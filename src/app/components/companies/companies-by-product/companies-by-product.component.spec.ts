import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompaniesByProductComponent } from './companies-by-product.component';

describe('CompaniesByProductComponent', () => {
  let component: CompaniesByProductComponent;
  let fixture: ComponentFixture<CompaniesByProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesByProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
