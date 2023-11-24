import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarDetailsComponent {

}
