import { TestBed } from '@angular/core/testing';

import { ChartDrawingService } from './chart-drawing.service';

describe('ChartDrawingService', () => {
  let service: ChartDrawingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDrawingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
