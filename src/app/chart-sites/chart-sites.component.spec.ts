import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSitesComponent } from './chart-sites.component';

describe('ChartSitesComponent', () => {
  let component: ChartSitesComponent;
  let fixture: ComponentFixture<ChartSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
