import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoGripaComponent } from './manejo-gripa.component';

describe('ManejoGripaComponent', () => {
  let component: ManejoGripaComponent;
  let fixture: ComponentFixture<ManejoGripaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoGripaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoGripaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
