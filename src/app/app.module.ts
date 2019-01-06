import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SafedomPipe } from './pipes/safedom.pipe';
import { EncryptPipe } from './pipes/encrypt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SafedomPipe,
    EncryptPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
