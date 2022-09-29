import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
import { GetSearchCountriesResponse } from '../../interfaces/countryModel/countryServiceModel/get-search-country-response';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries-capitals',
  templateUrl: './countries-capitals.component.html',
  styleUrls: ['./countries-capitals.component.css']
})
export class CountriesCapitalsComponent implements OnInit {
  public placeHolder: string = Constants.CAPITAL_PLACE_HOLDER;
  public countriesFounded: boolean = true;
  public countriesNotFoundAlert: string = Constants.CAPITAL_NOT_FOUND_ALERT;
  public responseSearchCountries: GetSearchCountriesResponse[] = new Array();

  constructor(
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  searchCountries(capital: string): void {
    this.countriesFounded = true;
    this._resetCountriesNotFoundAlert();

    if (this._existSearchCountriesInputValue(capital)) {
      this._countryService.searchCountries(capital, Constants.COUNTRY_API_ENDPOINT_CAPITAL)
        .subscribe((response) => {
          this.responseSearchCountries = response;
        }, (error) => {
          this._showSearchCountriesError(capital);
          this._resetResponseSearchCountries();     
        });
    }
    else {
      this._resetResponseSearchCountries();
    }
  }

  suggestions(capital: string): void {
    this.countriesFounded = true;
  }

  private _resetCountriesNotFoundAlert(): void {
    this.countriesNotFoundAlert = Constants.CAPITAL_NOT_FOUND_ALERT;
  }

  private _existSearchCountriesInputValue(capital: string): boolean {
    return capital.trim().length > Constants.ZERO;
  }

  private _showSearchCountriesError(capital: string): void {
    this.countriesNotFoundAlert += capital;
    this.countriesFounded = false;
  }

  private _resetResponseSearchCountries(): void {
    this.responseSearchCountries = new Array();
  }
}