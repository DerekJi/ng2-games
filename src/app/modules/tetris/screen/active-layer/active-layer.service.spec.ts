/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActiveLayerService } from './active-layer.service';

describe('Service: ActiveLayer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveLayerService]
    });
  });

  it('should ...', inject([ActiveLayerService], (service: ActiveLayerService) => {
    expect(service).toBeTruthy();
  }));
});
