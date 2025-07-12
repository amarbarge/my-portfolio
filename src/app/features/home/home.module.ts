import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MENU_TOKEN } from '../../shared/menu.token';
import { Menu } from '../../shared/menu.model';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HomeComponent }])],
  providers: [
    { provide: MENU_TOKEN, useValue: [{ label: 'Home', route: '/home' }] as Menu[] }
  ]
})
export class HomeModule {}
