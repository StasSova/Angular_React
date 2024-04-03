import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

import { RegFormComponent } from './Registration/reg-form/reg-form.component';
import { PasswordDirective } from './Registration/Directives/password.directive';
import { UsernameDirective } from './Registration/Directives/username.directive';
import { PasswordMatchDirective } from './Registration/Directives/password-match.directive';

// Reactive form:
import { ReactFormComponent } from './react-form/react-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PasswordMatchDirective,
    RegFormComponent,
    PasswordDirective,
    UsernameDirective,
    ReactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
