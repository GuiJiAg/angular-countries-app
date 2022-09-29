import { Injectable } from '@angular/core';
import { Constants } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetSearchCountriesResponse } from '../interfaces/countryModel/countryServiceModel/get-search-country-response';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _getSearchCountriesApiUrl: string = Constants.COUNTRY_API_URL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  searchCountries(id?: string, endPoint?: string): Observable<GetSearchCountriesResponse[]> {
    return this._httpClient.get<GetSearchCountriesResponse[]>(
      this._buildGetRequestSearchCountries(id, endPoint)); 
  }

  private _buildGetRequestSearchCountries(id?: string, endPoint?: string): string {
    return this._getSearchCountriesApiUrl
      + endPoint
      + id;
  }
}
