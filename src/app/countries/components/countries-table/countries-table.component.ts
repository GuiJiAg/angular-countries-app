import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
import { GetSearchCountriesResponse } from '../../interfaces/countryModel/countryServiceModel/get-search-country-response';
import { CountryTable } from '../../interfaces/countryModel/countryTable/country-table';

const TABLE: CountryTable = {
  tableHeads: [
    Constants.COUNTRY_TABLE_HEAD_FLAG,
    Constants.COUNTRY_TABLE_HEAD_COUNTRY,
    Constants.COUNTRY_TABLE_HEAD_CAPITAL,
    Constants.COUNTRY_TABLE_HEAD_POPULATION
  ]
}

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {
  public table: CountryTable = TABLE;
  public pathShowCountryPage: string = Constants.PATH_COUNTRY + Constants.SLASH;
  @Input() countries: GetSearchCountriesResponse[] = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
