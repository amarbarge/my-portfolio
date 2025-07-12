import { InjectionToken } from '@angular/core';
import { Menu } from './menu.model';

export const MENU_TOKEN = new InjectionToken<Menu[]>('MENU_TOKEN');
