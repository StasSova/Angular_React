import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestClassComponent } from './test-class/test-class.component';
import { BookComponent } from './book/book.component';

import { FormsModule } from '@angular/forms';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [AppComponent, TestClassComponent, BookComponent, PhoneComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
