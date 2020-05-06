import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './employee/filter/filter.component';
import { FiltersComponent } from './employee/filters/filters.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { SortByDateComponent } from './employee/sort-by-date/sort-by-date.component';
import { SearchFieldComponent } from './employee/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FiltersComponent,
    EmployeeListComponent,
    SortByDateComponent,
    SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
