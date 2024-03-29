import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GetSavingrateComponent } from './get-savingrate.component';

describe('GetSavingrateComponent', () => {
  let component: GetSavingrateComponent;
  let fixture: ComponentFixture<GetSavingrateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSavingrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSavingrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
