import { Component, ChangeDetectionStrategy, Injector } from '@angular/core';
import { MenuService } from '../../shared/menu.service';
import { Menu } from '../../shared/menu.model';
import { MENU_TOKEN } from '../../shared/menu.token';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    constructor(injector: Injector, menuService: MenuService) {
        // Initialize the menu service or any other service if needed
        // menuService.setMenu(injector.get<Menu[]>(MENU_TOKEN, []).flat());
    }
}
