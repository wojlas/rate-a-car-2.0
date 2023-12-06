import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ICarDetails, ICarListResponse } from '../interfaces';
import { ICarModelListRequest } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CarBrowserService {
  private _brandList: any[] = [];

  constructor(private readonly _api: HttpClient) { }

  public getBrandsList(): Observable<any[]> {
    return this._brandList.length ? of(this._brandList) : this._api.get<any[]>('/cars/brand').pipe(
      tap(res => this._brandList = res)
    );
  }

  public getCarModelsList(request: ICarModelListRequest): Observable<ICarListResponse> {
    return this._api.post<ICarListResponse>('cars/models/', request);
  }

  public getCarModelDetails(id: number): Observable<ICarDetails> {
    return this._api.get<ICarDetails>(`cars/model/${ id }`);
  }
}
