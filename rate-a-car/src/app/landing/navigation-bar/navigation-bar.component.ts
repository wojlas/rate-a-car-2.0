import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IMainMenuItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  public isDropdownOpen = false;

  public readonly menuItem: IMainMenuItem[] = [
    {
      id: 0,
      label: 'Strona główna',
      route: 'home',
      order: 0,
      visibility: true
    },
    {
      id: 1,
      label: 'Przegląd aut',
      route: 'car-browser',
      order: 1,
      visibility: true
    },
    {
      id: 2,
      label: 'Profil',
      route: 'user/profile',
      order: 2,
      visibility: true
    },
    {
      id: 3,
      label: 'Zaloguj',
      route: 'user/sign-in',
      order: 3,
      visibility: true
    },
    {
      id: 4,
      label: 'Zarejestruj',
      route: 'user/sign-up',
      order: 4,
      visibility: true
    },

  ];

  constructor(private readonly _router: Router) {}

  public navigateToRoute(route: string): void {
    this.isDropdownOpen = false;
    this._router.navigate([route]);
  }
}
