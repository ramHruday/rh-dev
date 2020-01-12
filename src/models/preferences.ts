import { IAssetAttribute } from './asset';
import { ApplicationName } from './enums';
import { IFacetFieldParameters } from './facets';

export interface ISavedView {
  id?: string;
  view?: string;
  applicationName?: ApplicationName;
  timestamp?: string;
}

export interface ISavedColumns {
  id?: string;
  columnList?: IAssetAttribute[];
  applicationName?: ApplicationName;
  timestamp?: string;
}

export interface ISavedFacet {
  id?: string;
  name?: string;
  query?: string;
  filters?: string[];
  fields?: IFacetFieldParameters[];
  applicationName?: ApplicationName;
  timestamp?: string;
}

export interface IDeleteResponse {
  status?: string;
  message?: string;
  error?: string;
}

export const DEFAULT_SURVEY_SAVED_FACET: ISavedFacet = {
  fields: [{ name: 'location' }, { name: 'account_name' }, { name: 'region' }, { name: 'therapeutic_area' }],
};

export const DEFAULT_SAVED_FACET: ISavedFacet = {
  fields: [{ name: 'content_source' }, { name: 'location' }, { name: 'product' }, { name: 'region' }],
};

export const DEFAULT_COLUMNS: IAssetAttribute[] = ['interact_scientific_platform', 'therapeutic_area', 'account_name'];
