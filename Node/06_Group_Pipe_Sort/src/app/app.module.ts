import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudienceCompComponent } from './audience-comp/audience-comp.component';
import { GroupCompComponent } from './group-comp/group-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterByFacultyPipe } from './pipes/filter-by-faculty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AudienceCompComponent,
    GroupCompComponent,
    MainCompComponent,
    FilterPipe,
    FilterByFacultyPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
