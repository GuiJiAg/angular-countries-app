import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../utils/constants';
import { CountryService } from '../../services/country.service';
import { GetSearchCountriesResponse } from '../../interfaces/countryModel/countryServiceModel/get-search-country-response';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public placeHolder: string = Constants.COUNTRY_PLACE_HOLDER;
  public countriesNotFoundAlert: string = Constants.CONTRY_NOT_FOUND_ALERT;
  public countriesFounded: boolean = true;
  public responseSearchCountries: GetSearchCountriesResponse[] = new Array();

  constructor(
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  searchCountries(country: string): void {
    this.countriesFounded = true;
    this._resetCountriesNotFoundAlert();

    if (this._existSearchCountriesInputValue(country)) {
      this._countryService.searchCountries(country, Constants.COUNTRY_API_ENDPOINT_NAME)
        .subscribe((response) => {
          this.responseSearchCountries = response;
        }, (error) => {
          this._showSearchCountriesError(country);
          this._resetResponseSearchCountriesName();     
        });
    }
    else {
      this._resetResponseSearchCountriesName();
    }
  }

  suggestions(country: string): void {
    this.countriesFounded = true;
  }

  private _existSearchCountriesInputValue(country: string): boolean {
    return country.trim().length > Constants.ZERO;
  }

  private _showSearchCountriesError(country: string): void {
    this.countriesNotFoundAlert += country;
    this.countriesFounded = false;
  }

  private _resetCountriesNotFoundAlert(): void {
    this.countriesNotFoundAlert = Constants.CONTRY_NOT_FOUND_ALERT;
  }

  private _resetResponseSearchCountriesName(): void {
    this.responseSearchCountries = new Array();
  }
}