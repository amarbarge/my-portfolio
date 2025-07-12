import { Inject, Injectable, Optional } from '@angular/core';
import { Menu } from './menu.model';
import { MENU_TOKEN } from './menu.token';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(@Optional() @Inject(MENU_TOKEN) private menuItems: Menu[] = []) {}

  getMenu(): Menu[] {
    return this.menuItems ? [...this.menuItems] : [];
  }
}
