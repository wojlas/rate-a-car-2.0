import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

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
}
