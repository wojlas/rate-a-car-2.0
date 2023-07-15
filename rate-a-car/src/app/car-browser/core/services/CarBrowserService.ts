import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IIdAndName } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarBrowserService {
  constructor(private readonly _api: HttpClient) {}

  public getAllCarBrands(): Observable<IIdAndName[]> {
    return this._api.get<IIdAndName[]>('cars/brand/');
  }

  public getModelsList(): Observable<any[]> {
    return this._api.get<any[]>('cars/randomModels');
  }
}
