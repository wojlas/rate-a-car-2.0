import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IMainMenuItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  public readonly menuItem: IMainMenuItem[] = [
    {
      id: 0,
      label: 'Strona główna',
      route: 'home',
      order: 0,
      visibility: true
    },
  ];

}
