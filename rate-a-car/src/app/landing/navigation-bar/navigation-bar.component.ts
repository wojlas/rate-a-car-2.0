import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, fromEvent, map, pluck } from 'rxjs';
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

  private _sub$?: Subscription;

  constructor(private readonly _router: Router, private readonly _cdr: ChangeDetectorRef) {}

  public openMobileDropdown(): void {
    this.isDropdownOpen = true;
    
    this._sub$ = fromEvent(document, 'click').pipe(
      map((res: Event) => {
        const target = res.target as HTMLElement;
        return target.className === 'icon-menu';
      }
    )).subscribe((res: boolean) => {
      this.toggleDropdown(res);
    });
  }

  public navigateToRoute(route: string): void {
    this.toggleDropdown(false);
    this._router.navigate([route]);
  }

  private toggleDropdown(value: boolean): void {
    this.isDropdownOpen = value;

    if (!value) {
      this._sub$?.unsubscribe();
    }
    
    this._cdr.detectChanges();
  }
}
