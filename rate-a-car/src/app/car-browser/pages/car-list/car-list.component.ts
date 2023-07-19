import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { CarBrowserService } from '../../core/services/CarBrowserService';
import { GlobalComponentTools } from 'src/app/core/abstraction/GlobalComponentTools';
import { IIdAndName } from 'src/app/core/interfaces';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListComponent extends GlobalComponentTools implements OnInit {
  public brands$!: Observable<IIdAndName[]>;
  public models$!: Observable<any[]>;

  constructor(private readonly _carBrowserSrvice: CarBrowserService) {
    super();
  }

  public ngOnInit(): void {
    this.brands$ = this._carBrowserSrvice.getAllCarBrands().pipe(
      takeUntil(this.unsubscribe)
    );

    this.models$ = this._carBrowserSrvice.getModelsList().pipe(
      takeUntil(this.unsubscribe)
    );
  }

  public filterByBrand(id: number): void {
    this.models$ = this._carBrowserSrvice.getModelsByBrand(id);
  }

}
