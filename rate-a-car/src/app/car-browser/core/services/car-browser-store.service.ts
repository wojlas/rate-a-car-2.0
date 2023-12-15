import { Injectable, Signal, effect, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ICarModelListRequest } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarBrowserStoreService {
  private readonly _searchModel = signal<ICarModelListRequest>(
    {
      pageIndex: 1,
      pageSize: 20,
      filters: {
        searchTerm: '',
        brandIds: []
      }
    }
  );

  public get searchModel(): Signal<ICarModelListRequest> {
    return this._searchModel.asReadonly();
  }

  public get searchModel$(): Observable<ICarModelListRequest> {
    return toObservable(this._searchModel);
  }

  public set searchModel(model: ICarModelListRequest) {
    if (model) {
      this._searchModel.set(model);
    }
  }
}
