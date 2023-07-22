import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { CarBrowserService } from '../../core/services/CarBrowserService';
import { GlobalComponentTools } from 'src/app/core/abstraction/GlobalComponentTools';
import { ICarModel, IIdAndName } from 'src/app/core/interfaces';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListComponent extends GlobalComponentTools implements OnInit {
  public brands$!: Observable<IIdAndName[]>;
  public models$!: Observable<ICarModel[]>;

  private _models!: ICarModel[];

  constructor(private readonly _carBrowserService: CarBrowserService) {
    super();
  }

  public ngOnInit(): void {
    this.brands$ = this._carBrowserService.getAllCarBrands().pipe(
      map(res => {
        return [{ id: 0, name: 'Wszystkie' }].concat(res);
      })
      );

    this.models$ = this.getModels();
  }

  public filterByBrand(id: number): void {
    this.models$ = this.getModels(id);
  }

  private getModels(id?: number): Observable<ICarModel[]> {
    const apiCall$ = id && id > 0 ? this._carBrowserService.getModelsByBrand(id) : this._carBrowserService.getModelsList();
    return this._models && (id === undefined) ? of(this._models) : apiCall$.pipe(tap(res => {
      this._models = res;
    }));
  }

}
