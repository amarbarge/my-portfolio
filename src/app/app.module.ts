import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Menu } from './shared/menu.model';
import { MENU_TOKEN } from './shared/menu.token';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpService } from './core/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
            provideHttpClient(withInterceptorsFromDi()),
    { provide: MENU_TOKEN, useValue: [{ label: 'Home', route: '/home' }, { label: 'About', route: '/about' }, { label: 'Contact', route: '/contact' }] as Menu[], multi: true },
    // HttpService is providedIn: 'root' only
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
