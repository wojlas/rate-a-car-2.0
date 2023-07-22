import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-car-browser',
  templateUrl: './car-browser.component.html',
  styleUrls: ['./car-browser.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarBrowserComponent {

}
