import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICarModel, IIdAndName } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarBrowserService {
  constructor(private readonly _api: HttpClient) {}

  public getAllCarBrands(): Observable<IIdAndName[]> {
    return this._api.get<IIdAndName[]>('cars/brand/');
  }

  public getModelsList(): Observable<ICarModel[]> {
    return this._api.get<ICarModel[]>('cars/randomModels');
  }

  public getModelsByBrand(id: number): Observable<ICarModel[]> {
    return this._api.get<ICarModel[]>(`cars/model/${ id }`);
  }
}
