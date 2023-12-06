import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ICarListResponse, ICarModel } from '../../core/interfaces';
import { CustomizableTableComponent } from 'src/app/global/components/customizable-table/customizable-table.component';
import { IPaginationChanged, ITableHeader } from 'src/app/global/core/interfaces';
import { PaginationComponent } from 'src/app/global/components/pagination/pagination.component';
import { CarBrowserService, CarBrowserStoreService } from '../../core/services';
import { ICarModelListRequest } from 'src/app/core/interfaces';

@Component({
  selector: 'app-cars-table',
  standalone: true,
  imports: [CommonModule, CustomizableTableComponent, PaginationComponent],
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsTableComponent {
  public tableHeader = signal<ITableHeader<ICarModel>[]>(
    [
      {
        id: 0,
        label: 'Marka',
        property: 'brand',
        position: 0,
        sorted: true,
        visible: true,
        width: 200
      },
      {
        id: 1,
        label: 'Model',
        property: 'name',
        position: 1,
        sorted: false,
        visible: true,
        width: 200
      },
      {
        id: 2,
        label: 'Wersja',
        property: 'version',
        position: 2,
        sorted: false,
        visible: true,
        width: 200
      },
      {
        id: 3,
        label: 'Produkowany od',
        property: 'productionFrom',
        position: 3,
        sorted: false,
        visible: true,
        width: 200
      },
      {
        id: 4,
        label: 'Produkowany do',
        property: 'productionTo',
        position: 4,
        sorted: false,
        visible: true,
        width: 200
      },
      {
        id: 5,
        label: 'Ocena',
        property: 'rate',
        position: 5,
        sorted: false,
        visible: true,
        width: 200
      }
    ]
  );

  public readonly fullCount = signal<number>(0);

  private _searchModel = signal<ICarModelListRequest>(
    {
      pageIndex: 1,
      pageSize: 20,
      filters: { searchTerm: '' }
    }
  );
  private _init = true;
  private readonly _models = signal<ICarModel[]>([]);

  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _carBrowserStoreService: CarBrowserStoreService,
    private readonly _carBrowserService: CarBrowserService
  ) {
    _activatedRoute.data.subscribe(({ data }) => {
      this.refreshData(data);
    });

    _carBrowserStoreService.searchModel$.subscribe((res: ICarModelListRequest) => {
      this._searchModel.set(res);

      if (this._init) {
        this._init = false;
      } else {
        this.getCarList();
      }
    });
  }

  public get models(): ICarModel[] {
    return this._models();
  }

  public get searchModel(): Signal<ICarModelListRequest> {
    return this._searchModel.asReadonly();
  }

  public paginationChanged(newState: IPaginationChanged): void {
    this._carBrowserStoreService.searchModel = {
      ...this._searchModel(),
      pageIndex: newState.pageNumber,
      pageSize: newState.pageSize
    }
  }

  private getCarList(): void {
    this._carBrowserService.getCarModelsList(this._searchModel()).subscribe((result: ICarListResponse) => {
      this.refreshData(result);
    }); 
  }

  private refreshData(data: ICarListResponse): void {
this._models.set(data.carModels);
      this.fullCount.set(data.totalCount);
  }
}
