import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICarModel, ITableHeader } from 'src/app/core/interfaces';

@Component({
  selector: 'app-car-models-table',
  templateUrl: './car-models-table.component.html',
  styleUrls: ['./car-models-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarModelsTableComponent {
  @Input() set models(val: ICarModel[]) {
    if (val) {
      this._models = val.map(model => {
        model.brandName = model.brand.name;
        return model; 
      })
    }
  }

  public tableHeader: ITableHeader[] = [
    {
      id: 0,
      isVisible: true,
      name: 'Marka',
      position: 0,
      property: 'brandName',
      width: 200
    },    
    {
      id: 1,
      isVisible: true,
      name: 'Model',
      position: 1,
      property: 'name',
      width: 200
    },
    {
      id: 2,
      isVisible: true,
      name: 'Wersja',
      position: 2,
      property: 'version',
      width: 200
    },
    {
      id: 3,
      isVisible: true,
      name: 'Produkowany od',
      position: 3,
      property: 'production_from',
      width: 100
    },
    {
      id: 4,
      isVisible: true,
      name: 'Produkowany do',
      position: 4,
      property: 'production_to',
      width: 100
    },
    {
      id: 5,
      isVisible: true,
      name: 'Ocena',
      position: 5,
      property: 'rate',
      width: 100
    },
  ];

  private _models!: ICarModel[];

  public get models(): ICarModel[] {
    return this._models;
  }
}
