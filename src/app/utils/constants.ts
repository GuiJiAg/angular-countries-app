export class Constants {
    /* GENERALS */
    public static EMPTY: string = '';
    public static SLASH: string = '/';
    public static TWO_POINTS: string = ':';
    public static ZERO: number = 0;
    public static DEBOUNCE_MILISECONDS = 300;

    /* ROUTES */
    public static PATH_EMPTY: string = Constants.EMPTY;
    public static PATH_MATCH_FULL: string = 'full';
    public static PATH_ID: string = Constants.SLASH + Constants.TWO_POINTS + 'id';
    public static PATH_UNDEFINED: string = '**';
    public static PATH_REGIONS: string = 'regions';
    public static PATH_COUNTRIES_CAPITALS: string = 'countries-capitals';
    public static PATH_COUNTRY: string = 'country';

    /* SIDEBAR COMPONENT STUFF */
    public static TITLE_SIDEBAR_COMPONENT: string = 'Searchs';
    public static SEARCH_COUNTRY_TITLE: string = 'Search Country';
    public static SEARCH_REGIONS_TITLE: string = 'Search Regions';
    public static SEARCH_CAPITALS_TITLE: string = 'Search Capitals';

    /* COUNTRY PAGE STUFF */
    public static CONTRY_NOT_FOUND_ALERT: string = 'Countries Not Found: ';
    public static COUNTRY_PLACE_HOLDER = 'Search By Country...';

    /* CAPITAL PAGE STUFF */
    public static CAPITAL_NOT_FOUND_ALERT: string = 'Capitals Not Found: ';
    public static CAPITAL_PLACE_HOLDER = 'Search By Capital...';

    /* SHOW COUNTRY PAGE STUFF */
    public static COUNTRY_TEXT: string = 'Country: ';
    public static FLAG_TEXT: string = 'Flag';
    public static INFORMATION_TEXT: string = 'Information';
    public static POPULATION_TEXT: string = 'Population: ';
    public static NUMERIC_CODE_TEXT: string = 'Numeric Code: ';
    public static ALPHA_CODE_TEXT: string = 'Alpha Code: ';
    public static OFFICIAL_TRANSLATIONS_TEXT: string = 'Official Translations';
    public static SPANISH_TEXT: string = 'Spanish: ';
    public static FRENCH_TEXT: string = 'French: ';
    public static ITALIAN_TEXT: string = 'Italian: ';
    public static PORTUGUESE_TEXT: string = 'Portuguese: ';
    public static GERMAN_TEXT: string = 'German: ';

    /* COUNTRY TABLE STUFF */
    public static COUNTRY_TABLE_HEAD_FLAG: string = 'Flag';
    public static COUNTRY_TABLE_HEAD_COUNTRY: string = 'Country';
    public static COUNTRY_TABLE_HEAD_CAPITAL: string = 'Capital';
    public static COUNTRY_TABLE_HEAD_POPULATION: string = 'Population';

    /* COUNTRY SERVICE STUFF */
    public static COUNTRY_API_URL = 'https://restcountries.com/v3.1/';
    public static COUNTRY_API_ENDPOINT_NAME = 'name/';
    public static COUNTRY_API_ENDPOINT_CAPITAL = 'capital/';
    public static COUNTRY_API_ENDPOINT_ALPHA = 'alpha/';
}