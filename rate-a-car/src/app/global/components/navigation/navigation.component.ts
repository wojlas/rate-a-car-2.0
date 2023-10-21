import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMainMenuItem } from '../../core/interfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterPipe } from 'src/app/core/pipes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink, FilterPipe]
})
export class NavigationComponent {
  public readonly mainMenuItems: IMainMenuItem[] = [
    {
      title: 'Strona główna',
      path: '',
      isVisible: true
    },
    {
      title: 'Katalog samochodów',
      path: '/cars',
      isVisible: true
    },
    {
      title: 'Dyskusje',
      path: '/threads',
      isVisible: true
    },
    
    {
      title: 'Zaloguj',
      path: '/log-in',
      isVisible: true
    },
    {
      title: 'Zarejestruj',
      path: '/register',
      isVisible: true
    },
    {
      title: 'Moje konto',
      path: '/space',
      isVisible: false
    },
    {
      title: 'Wyloguj',
      path: '/log-out',
      isVisible: false
    }
  ];
}
