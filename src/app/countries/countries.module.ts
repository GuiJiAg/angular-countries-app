import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountriesCapitalsComponent } from './pages/countries-capitals/countries-capitals.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { AppRoutingModule } from '../app-routing.module';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';



@NgModule({
  declarations: [
    CountriesCapitalsComponent,
    CountryComponent,
    RegionsComponent,
    ShowCountryComponent,
    CountriesTableComponent,
    CountriesInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    CountriesCapitalsComponent,
    CountryComponent,
    RegionsComponent,
    ShowCountryComponent,
  ]
})
export class CountriesModule { }
