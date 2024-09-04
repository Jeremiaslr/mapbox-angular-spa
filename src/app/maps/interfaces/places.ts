export interface PlacesResponse {
  type:        string;
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  type:       string;
  id:         string;
  geometry:   Geometry;
  properties: Properties;
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  mapbox_id:       string;
  feature_type:    string;
  full_address:    string;
  name:            string;
  name_preferred:  string;
  coordinates:     Coordinates;
  place_formatted: string;
  bbox?:           number[];
  context:         Context;
}

export interface Context {
  postcode:     Postcode;
  locality:     District;
  place:        District;
  district:     District;
  region:       Region;
  country:      Country;
  neighborhood: District;
  street?:      Postcode;
}

export interface Country {
  mapbox_id:            string;
  name:                 string;
  wikidata_id:          string;
  country_code:         string;
  country_code_alpha_3: string;
  translations:         Translations;
}

export interface Translations {
  es: Es;
}

export interface Es {
  language: Language;
  name:     string;
}

export enum Language {
  En = "en",
  Es = "es",
}

export interface District {
  mapbox_id:    string;
  name:         string;
  wikidata_id?: string;
  translations: Translations;
  alternate?:   District;
}

export interface Postcode {
  mapbox_id: string;
  name:      string;
}

export interface Region {
  mapbox_id:        string;
  name:             string;
  wikidata_id:      string;
  region_code:      string;
  region_code_full: string;
  translations:     Translations;
}

export interface Coordinates {
  longitude: number;
  latitude:  number;
}
