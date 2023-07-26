import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CarBrowserService } from '../../core/services/CarBrowserService';
import { GlobalComponentTools } from 'src/app/core/abstraction/GlobalComponentTools';
import { ICarModel, IIdAndName } from 'src/app/core/interfaces';
import { ICarModelGetFilter } from 'src/app/core/interfaces/ICarModelGetFilter';
import { ICarModelsResponseData } from '../../core/interfaces/ICarMOdelsResponseData';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListComponent extends GlobalComponentTools implements OnInit {
  public brands$!: Observable<IIdAndName[]>;
  public models!: ICarModelsResponseData;

  private _modelsRequest: ICarModelGetFilter = {
    pageIndex: 1,
    pageSize: 10
  };

  constructor(private readonly _carBrowserService: CarBrowserService, private readonly _cdr: ChangeDetectorRef) {
    super();
  }

  public ngOnInit(): void {
    this.brands$ = this._carBrowserService.getAllCarBrands().pipe(
      map(res => {
        return [{ id: 0, name: 'Wszystkie' }].concat(res);
      })
      );

    this.getCarModels();
  }

  public get pageIndex(): number {
    return this._modelsRequest.pageIndex
  }

  public get pageSize(): number {
    return this._modelsRequest.pageSize;
  }

  // public filterByBrand(id: number): void {
  //   this.models$ = this.getModels(id);
  // }

  public pageIndexChange(index: number): void {
    this._modelsRequest.pageIndex = index;

    this.getCarModels();
  }

  public pageSizeChangeHandler(size: number): void {
    this._modelsRequest.pageSize = size;

    this.getCarModels();
  }

  private getCarModels(): void {
    this._carBrowserService.getModelsList(this._modelsRequest).subscribe(res => {
      this.models = res;

      this._cdr.detectChanges();
    })
  }

}
