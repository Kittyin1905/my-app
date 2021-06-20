import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDrugsComponent } from './chart-drugs.component';

describe('ChartDrugsComponent', () => {
  let component: ChartDrugsComponent;
  let fixture: ComponentFixture<ChartDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDrugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
