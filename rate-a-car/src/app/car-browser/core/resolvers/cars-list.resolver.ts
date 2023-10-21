import { ResolveFn } from '@angular/router';

export const carsListResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
