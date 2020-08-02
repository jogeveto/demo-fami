import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsoOximetroComponent } from './pulso-oximetro.component';

describe('PulsoOximetroComponent', () => {
  let component: PulsoOximetroComponent;
  let fixture: ComponentFixture<PulsoOximetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulsoOximetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsoOximetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
