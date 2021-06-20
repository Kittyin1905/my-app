import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharTemporalComponent } from './char-temporal.component';

describe('CharTemporalComponent', () => {
  let component: CharTemporalComponent;
  let fixture: ComponentFixture<CharTemporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharTemporalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
