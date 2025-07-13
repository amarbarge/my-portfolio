import { Injectable, Injector } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { Menu } from './menu.model';
import { MENU_TOKEN } from './menu.token';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuItemsSubject = new BehaviorSubject<Menu[]>([]);
  menuItems$: Observable<Menu[]> = this.menuItemsSubject.asObservable();


  constructor(private router: Router, private injector: Injector) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const menu = this.getAllMenus();
        this.menuItemsSubject.next(menu);
      });
  }

  private getAllMenus(): Menu[] {
    try {
      const menu = this.injector.get<Menu[]>(MENU_TOKEN, []);
      return Array.isArray(menu[0]) ? menu.flat() : menu;
    } catch {
      return [];
    }
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
