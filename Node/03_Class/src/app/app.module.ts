import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './site/home/home.component';
import { BlogComponent } from './site/blog/blog.component';
import { ContactComponent } from './site/contact/contact.component';
import { HeaderComponent } from './site/header/header.component';
import { FooterComponent } from './site/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    UserComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
