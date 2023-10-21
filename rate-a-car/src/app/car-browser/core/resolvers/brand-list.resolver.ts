import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CarBrowserService } from '../services/car-browser.service';

export const brandListResolver: ResolveFn<any[]> = (route, state) => {
  const _carBrowserService = inject(CarBrowserService);

  return _carBrowserService.getBrandsList();
};
