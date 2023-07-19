import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IIdAndName } from 'src/app/core/interfaces';

@Component({
  selector: 'app-brand-tile[brand]',
  templateUrl: './brand-tile.component.html',
  styleUrls: ['./brand-tile.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandTileComponent {
  @Input() brand!: IIdAndName;
  @Output() selectedBrand = new EventEmitter<number>();
}
