import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnDerBoerseHandelnComponent } from './an-der-boerse-handeln.component';

describe('AnDerBoerseHandelnComponent', () => {
  let component: AnDerBoerseHandelnComponent;
  let fixture: ComponentFixture<AnDerBoerseHandelnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnDerBoerseHandelnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnDerBoerseHandelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
