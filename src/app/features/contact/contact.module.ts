import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { MENU_TOKEN } from '../../shared/menu.token';
import { Menu } from '../../shared/menu.model';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ContactComponent }
    ]),
    ContactComponent
  ],
  providers: [
    { provide: MENU_TOKEN, useValue: [{ label: 'Contact', route: '/contact' }] as Menu[] }
  ]
})
export class ContactModule {}
