import { Component, OnDestroy } from '@angular/core';
import { MenuService } from './shared/menu.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = '';
  menuItems: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private menuService: MenuService) {
    this.menuService.menuItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        this.menuItems = items;
        console.log('Menu Items:', this.menuItems);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
