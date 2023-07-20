import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {
  public loader$?: Observable<boolean>;

  constructor(private readonly _loader: LoaderService) {
    this.loader$ = _loader.loader$;
  }
}
