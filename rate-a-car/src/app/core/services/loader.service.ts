import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _showLoader$ = new Subject<boolean>();

  public get loader$(): Observable<boolean> {
    return this._showLoader$.asObservable();
  }

  public set loader(value: boolean) {
    this._showLoader$.next(value);
  }
}
