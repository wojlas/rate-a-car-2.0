import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CarBrowserService, CarBrowserStoreService } from '../services';
import { ICarListResponse } from '../interfaces';

export const carsListResolver: ResolveFn<ICarListResponse> = () => {
  const _carBrowserService = inject(CarBrowserService);
  const _carBrowserStoreService = inject(CarBrowserStoreService);

  _carBrowserStoreService.searchModel = {
    pageIndex: 1,
    pageSize: 10,
    filters: {
      searchTerm: ''
    }
  };
  
  return _carBrowserService.getCarModelsList(_carBrowserStoreService.searchModel());
};
