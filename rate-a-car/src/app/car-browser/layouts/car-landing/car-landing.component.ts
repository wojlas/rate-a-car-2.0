import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "../../ui/filters/filters.component";
import { BrandListComponent } from "../../views/brand-list/brand-list.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-car-landing',
    standalone: true,
    templateUrl: './car-landing.component.html',
    styleUrls: ['./car-landing.component.scss'],
    host: { class: 'w-100' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FiltersComponent, BrandListComponent, RouterOutlet]
})
export class CarLandingComponent {
    public brandList: any[] = [];

    public constructor(
        private readonly _activatedRoute: ActivatedRoute,
    ) {
        _activatedRoute.data.subscribe(({ data }) => {
            this.brandList = data;
        });
    }
}
