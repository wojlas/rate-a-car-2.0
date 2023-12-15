import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarBrowserStoreService } from '../../core/services';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  public filterForm!: FormGroup;

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _carBrowserStoreService = inject(CarBrowserStoreService);

  public ngOnInit(): void {
   this.filterForm = this._fb.group({
    searchTerm: [this._carBrowserStoreService.searchModel().filters.searchTerm],
    productionFrom: [this._carBrowserStoreService.searchModel().filters.productionFrom],
    productionTo: [this._carBrowserStoreService.searchModel().filters.productionTo],
    rateFrom: [this._carBrowserStoreService.searchModel().filters.rateFrom],
    rateTo: [this._carBrowserStoreService.searchModel().filters.rateTo]
   });
  }

  public apply(): void {
    this._carBrowserStoreService.searchModel = {
      pageIndex: this._carBrowserStoreService.searchModel().pageIndex,
      pageSize: this._carBrowserStoreService.searchModel().pageSize,
      filters: {
        searchTerm: this.filterForm.get('searchTerm')?.value,
        productionFrom: this.filterForm.get('productionFrom')?.value,
        productionTo: this.filterForm.get('productionTo')?.value,
        rateFrom: this.filterForm.get('rateFrom')?.value,
        rateTo: this.filterForm.get('rateTo')?.value,
        brandIds: this._carBrowserStoreService.searchModel().filters.brandIds
      }
    };
  }
}
