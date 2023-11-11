import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IIdAndName } from 'src/app/core/interfaces';

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
      this.brandName.set(brand.name);
    }
  }

  public brandName = signal<string>('');

}
