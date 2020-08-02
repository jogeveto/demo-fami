import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevensionContagioCovidComponent } from './prevension-contagio-covid.component';

describe('PrevensionContagioCovidComponent', () => {
  let component: PrevensionContagioCovidComponent;
  let fixture: ComponentFixture<PrevensionContagioCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevensionContagioCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevensionContagioCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
