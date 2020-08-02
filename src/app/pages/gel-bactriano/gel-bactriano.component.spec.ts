import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GelBactrianoComponent } from './gel-bactriano.component';

describe('GelBactrianoComponent', () => {
  let component: GelBactrianoComponent;
  let fixture: ComponentFixture<GelBactrianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelBactrianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelBactrianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
