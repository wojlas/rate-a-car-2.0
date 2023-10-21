import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBrandComponent } from "../../ui/single-brand/single-brand.component";

@Component({
    selector: 'app-brand-list',
    standalone: true,
    templateUrl: './brand-list.component.html',
    styleUrls: ['./brand-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, SingleBrandComponent]
})
export class BrandListComponent {
  @Input() set list(list: any[]) {
    if (list) {
      this._list = list;
    }
  };

  private _list!: any[];

  public get list(): any[] {
    return this._list;
  }
}

