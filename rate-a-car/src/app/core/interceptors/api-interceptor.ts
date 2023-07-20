import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import environments from "../../environment";
import { LoaderService } from '../services';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private readonly _loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const fullUrl = `${ environments.baseUrl }/${ request.url }`;

    const req = request.clone({
      url: fullUrl
    });

    this._loader.loader = true;

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
      finalize(() => this._loader.loader = false)
    );
  }
}
