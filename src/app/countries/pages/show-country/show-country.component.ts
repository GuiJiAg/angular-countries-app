import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from '../../services/country.service';
import { Constants } from '../../../utils/constants';
import { GetSearchCountriesResponse } from '../../interfaces/countryModel/countryServiceModel/get-search-country-response';
import { InformationTexts } from '../../interfaces/countryModel/countryTable/information-texts';
import { Mocks } from '../../../utils/mocks';
import { CountriesTranslations } from '../../interfaces/countryModel/countryTable/countries-translations';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {
  public informationTexts: InformationTexts = Mocks.INFORMATION_TEXTS_MOCK;
  public responseSearchCountry!: GetSearchCountriesResponse;
  public translations: CountriesTranslations[] = new Array();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
    /* De esta forma, cuando se abra este componente, estaremos recogiendo el ":id"
      de la ruta, con el "ActivatedRoute.params.suscribe(id)", siendo el "id" del
      parámetro de ese suscribe el valor de la ruta en la URL 
    */
    this._activatedRoute.params
      .subscribe(({id}) => {
        this._searchCountries(id);
      });
  }

  private _searchCountries(id: string): void {
    this._countryService.searchCountries(id, Constants.COUNTRY_API_ENDPOINT_ALPHA)
      .subscribe(response => {
        this.responseSearchCountry = response[Constants.ZERO];
        this._getTranslations();
      });
  }

  private _getTranslations(): void {
    this.translations = [
      {
        language: this.informationTexts.spanisText,
        translation: this.responseSearchCountry.translations.spa.official
      },
      {
        language: this.informationTexts.frenchText,
        translation: this.responseSearchCountry.translations.fra.official
      },
      {
        language: this.informationTexts.italianText,
        translation: this.responseSearchCountry.translations.ita.official
      },
      {
        language: this.informationTexts.portugueseText,
        translation: this.responseSearchCountry.translations.por.official
      },
      {
        language: this.informationTexts.germanText,
        translation: this.responseSearchCountry.translations.deu.official
      }
    ];
  }
}