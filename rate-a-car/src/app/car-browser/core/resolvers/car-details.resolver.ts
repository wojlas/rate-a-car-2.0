import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CarBrowserService } from '../services/car-browser.service';

export const carDetailsResolver: ResolveFn<unknown> = (route) => {
  const _carService = inject(CarBrowserService);
  
  return _carService.getCarModelDetails(route.params['id']);
};
