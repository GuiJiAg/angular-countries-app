import { InformationTexts } from '../countries/interfaces/countryModel/countryTable/information-texts';
import { Constants } from './constants';

const INFORMATION_TEXTS_MOCK: InformationTexts = {
    countryText: Constants.COUNTRY_TEXT,
    flagText: Constants.FLAG_TEXT,
    informationText: Constants.INFORMATION_TEXT,
    populationText: Constants.POPULATION_TEXT,
    numericCodeText: Constants.NUMERIC_CODE_TEXT,
    alphaCodeText: Constants.ALPHA_CODE_TEXT,
    translationsText: Constants.OFFICIAL_TRANSLATIONS_TEXT,
    spanisText: Constants.SPANISH_TEXT,
    frenchText: Constants.FRENCH_TEXT,
    italianText: Constants.ITALIAN_TEXT,
    portugueseText: Constants.PORTUGUESE_TEXT,
    germanText: Constants.GERMAN_TEXT
}

export class Mocks {
    public static INFORMATION_TEXTS_MOCK: InformationTexts = INFORMATION_TEXTS_MOCK;
}
