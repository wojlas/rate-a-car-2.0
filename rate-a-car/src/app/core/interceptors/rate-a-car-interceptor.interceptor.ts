import {
  HttpRequest,
  HttpInterceptorFn,
  HttpHandlerFn
} from '@angular/common/http';
import { apiUrl } from 'environments/enviroment';

export const rateACarInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  req = req.clone({ url: `${ apiUrl }${ req.url }` });
  
  return next(req);
}
