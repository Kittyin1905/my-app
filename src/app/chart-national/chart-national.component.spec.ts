import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNationalComponent } from './chart-national.component';

describe('ChartNationalComponent', () => {
  let component: ChartNationalComponent;
  let fixture: ComponentFixture<ChartNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartNationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
