import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './countries/pages/country/country.component';
import { RegionsComponent } from './countries/pages/regions/regions.component';
import { Constants } from './utils/constants';
import { CountriesCapitalsComponent } from './countries/pages/countries-capitals/countries-capitals.component';
import { ShowCountryComponent } from './countries/pages/show-country/show-country.component';


const routes: Routes = [
    {
        path: Constants.PATH_EMPTY,
        component: CountryComponent,
        pathMatch: Constants.PATH_MATCH_FULL
    },
    {
        path: Constants.PATH_REGIONS,
        component: RegionsComponent
    },
    {
        path: Constants.PATH_COUNTRIES_CAPITALS,
        component: CountriesCapitalsComponent
    },
    {
        path: Constants.PATH_COUNTRY + Constants.PATH_ID,
        component: ShowCountryComponent
    },
    {
        path: Constants.PATH_UNDEFINED,
        redirectTo: Constants.PATH_EMPTY
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}