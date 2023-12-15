import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IIdAndName } from 'src/app/core/interfaces';
import { CarBrowserStoreService } from '../../core/services';

@Component({
  selector: 'app-single-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-brand.component.html',
  styleUrls: ['./single-brand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleBrandComponent {
  @Input() set brand(brand: IIdAndName) {
    if (brand) {
      this.brandSignal.set(brand);
      this.selected = !!this._carBrowserStoreService.searchModel().filters.brandIds?.includes(brand.id);
    }
  }

  public brandSignal = signal<IIdAndName>({ id: -1, name: '' });
  public selected = false;

  private readonly _carBrowserStoreService = inject(CarBrowserStoreService);

  public setCarBrandId(): void {
    const selectedArr: number[] = this.selected ?
      this._carBrowserStoreService.searchModel().filters.brandIds.filter(x => x !== this.brandSignal().id) :
      this._carBrowserStoreService.searchModel().filters.brandIds;

    if (!this.selected) {
      selectedArr.push(this.brandSignal().id);
    }

    this._carBrowserStoreService.searchModel = {
      pageSize: this._carBrowserStoreService.searchModel().pageSize,
      pageIndex: 1,
      filters: {
        searchTerm: '',
        brandIds: selectedArr
      }
    };

    this.selected = !this.selected;
  }
}
