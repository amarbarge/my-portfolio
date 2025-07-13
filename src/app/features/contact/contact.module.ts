import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ContactComponent }
    ]),
    ContactComponent
  ],
  providers: [

  ]
})
export class ContactModule {}
