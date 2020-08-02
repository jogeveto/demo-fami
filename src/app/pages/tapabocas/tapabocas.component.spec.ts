import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapabocasComponent } from './tapabocas.component';

describe('TapabocasComponent', () => {
  let component: TapabocasComponent;
  let fixture: ComponentFixture<TapabocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapabocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapabocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
