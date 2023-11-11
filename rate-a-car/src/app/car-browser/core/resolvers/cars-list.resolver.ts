import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CarBrowserService } from '../services/car-browser.service';
import { ICarListResponse } from '../interfaces';

export const carsListResolver: ResolveFn<ICarListResponse> = (route, state) => {
  const _carBrowserService = inject(CarBrowserService);
  
  return _carBrowserService.getCarModelsList({ pageIndex: 1, pageSize: 20 });
};
