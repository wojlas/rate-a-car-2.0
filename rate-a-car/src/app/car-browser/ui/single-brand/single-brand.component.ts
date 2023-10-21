import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-brand.component.html',
  styleUrls: ['./single-brand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleBrandComponent {
  @Input() brand!: any;

}
