import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SecurityListItemComponent } from './security-list-item.component';


describe('SecurityListItemComponent', () => {
  let component: SecurityListItemComponent;
  let fixture: ComponentFixture<SecurityListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
