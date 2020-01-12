import { IAssetAttribute } from './asset';

export interface IFacetValue {
  value?: string;
  count?: number;
  subField?: IFacetField;
}

export interface IFacetField {
  field?: IAssetAttribute;
  values?: IFacetValue[];
}

export interface IFacetFieldParameters {
  name?: IAssetAttribute;
  prefix?: string;
  minCount?: number;
  pivotFields?: string; // comma seperated fieldNames
  facetLimit?: number;
  facetRange?: string;
  facetRangeGap?: string;
  facetRangeStart?: string;
  facetRangeEnd?: string;
}

export const SEARCH_FACET_CATEGORIES: IAssetAttribute[] = [
  'activity_type',
  'account_sub_type',
  'account_name',
  'interaction_id',
  // 'c3_business_unit',
  // 'classification',
  'comments',
  // 'contact',
  'content_source',
  // 'date',
  // 'gene',
  'interaction_medium',
  'location',
  'medical_event_name',
  'medical_event_type',
  'product',
  'region',
  'specialty',
  'therapeutic_area',
];

export const SURVEY_FACET_CATEGORIES: IAssetAttribute[] = [
  'account_name',
  // 'gene',
  'location',
  'region',
  'therapeutic_area',
];
