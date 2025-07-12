import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MENU_TOKEN } from '../../shared/menu.token';
import { Menu } from '../../shared/menu.model';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'introduction'
          }
        ]
      }
    ])
  ],
  providers: [
    { provide: MENU_TOKEN, useValue: [
      { label: 'About', route: '/about' },
      { label: 'Introduction', route: '/about/introduction' },
      { label: 'Education', route: '/about/education' },
      { label: 'Experience', route: '/about/experience' }
    ] as Menu[] }
  ]
})
export class AboutModule {}
