import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ICarModel } from '../../core/interfaces';
import { CustomizableTableComponent } from 'src/app/global/components/customizable-table/customizable-table.component';
import { ITableHeader } from 'src/app/global/core/interfaces';
import { PaginationComponent } from 'src/app/global/components/pagination/pagination.component';

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

  private readonly _models = signal<ICarModel[]>([]);

  public constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) {
    _activatedRoute.data.subscribe(({ data }) => {
      this._models.set(data.carModels);
      this.fullCount.set(data.totalCount);
    });
  }

  public get models(): ICarModel[] {
    return this._models();
  }
}
