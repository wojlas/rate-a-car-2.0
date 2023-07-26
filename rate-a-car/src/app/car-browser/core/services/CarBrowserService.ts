import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICarModel, IIdAndName } from 'src/app/core/interfaces';
import { ICarModelGetFilter } from 'src/app/core/interfaces/ICarModelGetFilter';
import { ICarModelsResponseData } from '../interfaces/ICarMOdelsResponseData';

@Injectable({
  providedIn: 'root'
})
export class CarBrowserService {
  private _allBrands!: IIdAndName[];
  private _modelsByBrand!: ICarModel[];

  constructor(private readonly _api: HttpClient) {}

  public getAllCarBrands(): Observable<IIdAndName[]> {
    return this._allBrands ? of(this._allBrands) : this._api.get<IIdAndName[]>('cars/brand/').pipe(
      tap(res => this._allBrands = res)
    );
  }

  public getModelsList(request: ICarModelGetFilter): Observable<ICarModelsResponseData> {
    return this._api.post<ICarModelsResponseData>('cars/randomModels/', request);
  }

  public getModelsByBrand(id: number): Observable<ICarModel[]> {
    return this._modelsByBrand && this._modelsByBrand.some(x => x.brand.id === id) ? 
    of(this._modelsByBrand) :
    this._api.get<ICarModel[]>(`cars/model/${ id }`).pipe(
      tap(res => this._modelsByBrand = res)
    );
  }
}
