export interface IAsset {
  _version_?: number;
  account_id?: string;
  account_name_s?: string[];
  account_name_us?: string[];
  account_name?: string;
  account_sub_type?: string;
  activity_type_group?: string;
  activity_type?: string;
  attachment_content?: string[];
  attachments?: string[];
  attendees?: string[];
  author_ss?: string[];
  author?: string;
  autocomplete?: string[];
  city_normalized_us?: string[];
  city_normalized?: string[];
  city?: string;
  clinical_impact_desc?: string;
  clinical_impact?: string;
  comments?: string;
  contains_comments?: boolean;
  content_source?: string;
  content_type?: string;
  content?: string[];
  country_normalized_us?: string[];
  country_normalized?: string[];
  country?: string;
  create_ts?: string;
  created_on?: string;
  current_notes?: string;
  discussion_delivered_aux_id?: string;
  discussion_delivered_id?: string;
  discussion_heard_aux_id?: string;
  discussion_heard_id?: string;
  entity_account_sub_type_s?: string[];
  entity_account_sub_type?: string;
  entity_country?: string;
  entity_region?: string;
  entity_state?: string;
  entity_therapeutic_area?: string[];
  experiment_id?: string;
  extracted_edmq?: string[];
  extracted_entities?: string[];
  extracted_molecules?: string[];
  feedback?: string;
  filename?: string;
  filetype?: string;
  has_attachment?: boolean;
  has_attendee?: boolean;
  has_note?: boolean;
  id?: string;
  idbs_entity_id?: string;
  ims_id?: string;
  interact_scientific_platform_s?: string;
  interact_scientific_platform?: string;
  interaction_activity_type_s?: string;
  interaction_activity_type?: string;
  interaction_date?: string;
  interaction_id?: string;
  interaction_medium?: string;
  interaction_sub_date?: string;
  is_top_30_ol_user?: boolean;
  last_modified?: string;
  location_prefix_parent?: string[];
  location_prefix?: string[];
  location_us?: string[];
  location?: string[];
  medical_event_name?: string;
  medical_event_type_s?: string;
  medical_event_type?: string;
  molecule_cambridgesoft_smiles?: string;
  molecule_cdx_text?: string[];
  molecule_cdx_xml?: string[];
  molecule_fingerprints_str?: string;
  molecule_fingerprints_sub_str?: string;
  molecule_fingerprints_sub?: number;
  molecule_fingerprints?: string[];
  molecule_smiles_text?: string[];
  molecule?: string[];
  next_interaction_notes?: string;
  path_prefix_parent?: string[];
  path_prefix?: string[];
  path?: string[];
  pre_interaction_notes?: string;
  preview_images?: string[];
  previous_notes?: string;
  primary_scientific_platform_s?: string;
  primary_scientific_platform?: string;
  proactive_comment_desc?: string;
  proactive_comment_type?: string;
  product_display_name?: string[];
  product_s?: string[];
  product_text?: string[];
  product?: string[];
  project?: string;
  reactive_comment_desc?: string;
  reactive_comment_type?: string;
  region?: string;
  report_guid?: string;
  report_id?: string;
  score?: number;
  sdms_id?: string;
  sdms_type?: string;
  snapshot_id?: number;
  specialty_text?: string[];
  specialty?: string;
  spellcheck?: string[];
  state_normalized_us?: string[];
  state_normalized?: string[];
  state?: string;
  system_ids?: string[];
  therapeutic_area_s?: string[];
  therapeutic_area_text?: string[];
  therapeutic_area?: string[];
  thumbnail_large?: string;
  tier?: number[];
  timestamp?: string;
  title?: string;
  topic?: string;
  upstring_ts?: string;
  url?: string;
  version_number?: number;
  yield?: string;
  zip?: string;
}

// All possible attribute across content source and application
export const ASSET_ATTRIBUTE_NAMES = {
  _version_: 'Version',
  account_id: 'Account ID',
  account_name_s: 'Account Name S',
  account_name_us: 'Account Name US',
  account_name: 'Account Name',
  account_sub_type: 'Account Sub Type',
  activity_type_group: 'Activity Type Group',
  activity_type: 'Activity Type',
  attachment_content: 'Attachment Content',
  attachments: 'Attachments',
  attendees: 'Attendees',
  author_ss: 'Author SS',
  author: 'Author',
  autocomplete: 'Autocomplete',
  city_normalized_us: 'City Normalized US',
  city_normalized: 'City Normalized',
  city: 'City',
  clinical_impact_desc: 'Clinical Impact Description',
  clinical_impact: 'Clinical Impact',
  comments: 'Comments',
  contains_comments: 'Contains Comments',
  content_source: 'Content Source',
  content_type: 'Content Type',
  content: 'Content',
  country_normalized_us: 'Country Normalized US',
  country_normalized: 'Country Normalized',
  country: 'Country',
  create_ts: 'Create Timestamp',
  created_on: 'Created On',
  current_notes: 'Current Notes',
  discussion_delivered_aux_id: 'Discussion Delivered Aux ID',
  discussion_delivered_id: 'Discussion Delivered ID',
  discussion_heard_aux_id: 'Discussion Heard Aux ID',
  discussion_heard_id: 'Discussion Heard ID',
  entity_account_sub_type_s: 'Entity Account Sub Type S',
  entity_account_sub_type: 'Entity Account Sub Type',
  entity_country: 'Entity Country',
  entity_region: 'Entity Region',
  entity_state: 'Entity State',
  entity_therapeutic_area: 'Entity Therapeutic Area',
  experiment_id: 'Experiment ID',
  extracted_edmq: 'Extracted EDMQ',
  extracted_entities: 'Extracted Entities',
  extracted_molecules: 'Extracted Molecules',
  feedback: 'Feedback',
  filename: 'File Name',
  filetype: 'File Type',
  has_attachment: 'Has Attachment',
  has_attendee: 'Has Attendee',
  has_note: 'Has Note',
  id: 'ID',
  idbs_entity_id: 'IDBS Entity ID',
  ims_id: 'IMS ID',
  interact_scientific_platform_s: 'Interaction Scientific Platform S',
  interact_scientific_platform: 'Interaction Scientific Platform',
  interaction_activity_type_s: 'Interaction Activity Type S',
  interaction_activity_type: 'Interaction Sctivity Type',
  interaction_date: 'Interaction Date',
  interaction_id: 'Interaction ID',
  interaction_medium: 'Interaction Medium',
  interaction_sub_date: 'Interaction Sub Date',
  is_top_30_ol_user: 'Is Top 30 OL User',
  last_modified: 'Last Modified',
  location_prefix_parent: 'Location Prefix Parent',
  location_prefix: 'Location Prefix',
  location_us: 'Location US',
  location: 'Location',
  medical_event_name: 'Medical Event Name',
  medical_event_type_s: 'Medical Event Type S',
  medical_event_type: 'Medical Event Type',
  molecule_cambridgesoft_smiles: 'Molecule cambridgesoft Smiles',
  molecule_cdx_text: 'Molecule CDX Text',
  molecule_cdx_xml: 'Molecule CDX XML',
  molecule_fingerprints_str: 'Molecule Fingerprints String',
  molecule_fingerprints_sub_str: 'Molecule Fingerprints Sub String',
  molecule_fingerprints_sub: 'Molecule Fingerprints Sub',
  molecule_fingerprints: 'Molecule Fingerprints',
  molecule_smiles_text: 'Molecule Smiles Text',
  molecule: 'Molecule',
  next_interaction_notes: 'Next Interaction Notes',
  path_prefix_parent: 'Path Prefix Parent',
  path_prefix: 'Path Prefix',
  path: 'Path',
  pre_interaction_notes: 'Pre Interaction Notes',
  preview_images: 'Preview Images',
  previous_notes: 'Previous Notes',
  primary_scientific_platform_s: 'Primary Scientific Platform S',
  primary_scientific_platform: 'Primary Scientific Platform',
  proactive_comment_desc: 'Proactive Comment Description',
  proactive_comment_type: 'Proactive Comment Type',
  product_display_name: 'Product Display Name',
  product_s: 'Product S',
  product_text: 'Product Text',
  product: 'Product',
  project: 'Project',
  reactive_comment_desc: 'Reactive Comment Description',
  reactive_comment_type: 'Reactive Comment Type',
  region: 'Region',
  report_guid: 'Report GUID',
  report_id: 'Report ID',
  score: 'Score',
  sdms_id: 'SDMS ID',
  sdms_type: 'SDMD Type',
  snapshot_id: 'Snapshot ID',
  specialty_text: 'Speciality Text',
  specialty: 'Speciality',
  spellcheck: 'Spellcheck',
  state_normalized_us: 'State Normalized US',
  state_normalized: 'State Normalized',
  state: 'State',
  system_ids: 'System IDs',
  therapeutic_area_s: 'Therapeutic Area S',
  therapeutic_area_text: 'Therapeutic Area Text',
  therapeutic_area: 'Therapeutic Area',
  thumbnail_large: 'Thumbnail Large',
  tier: 'Tier',
  timestamp: 'Timestamp',
  title: 'Title',
  topic: 'Topic',
  upstring_ts: 'UpString Timestamp',
  url: 'URL',
  version_number: 'Version Number',
  yield: 'Yield',
  zip: 'ZIP Code',
};

export type IAssetAttribute = keyof typeof ASSET_ATTRIBUTE_NAMES;

export const COMMON_DISPLAY_ATTRIBUTES: IAssetAttribute[] = [
  'account_name',
  'specialty',
  'tier',
  'interaction_id',
  'discussion_heard_aux_id', // TODO: Confirm with Vasu. There are four type of discussion id
  // 'inquiry_id'            // TODO: Uncomment after schema is updated. Currently not available from API
  // 'response_id'           // TODO: Uncomment after schema is updated. Currently not available from API
];

export const IRPC_DISPLAY_ATTRIBUTES: IAssetAttribute[] = COMMON_DISPLAY_ATTRIBUTES.concat([
  'product', // TODO: product? product_display_name, product_text?
  // 'date'                 // TODO: which date? Only interaction date is present
  // 'inquiry_description'  // TODO: Uncomment after schema is updated. Currently not available from API
]);

export const ALIGN_DISPLAY_ATTRIBUTES: IAssetAttribute[] = COMMON_DISPLAY_ATTRIBUTES.concat([
  // 'scientific_topic'     // TODO: Uncomment after schema is updated. Currently not available from API
  'account_sub_type',
  'ims_id',
  'interaction_medium',
  'medical_event_name',
  'medical_event_type',
]);

export const C3_DISPLAY_ATTRIBUTES: IAssetAttribute[] = COMMON_DISPLAY_ATTRIBUTES.concat([
  // 'amgen_contact',       // TODO: Uncomment after schema is updated. Currently not available from API
  // 'business_unit,        // TODO: Uncomment after schema is updated. Currently not available from API
  // 'source_type',         // TODO: Uncomment after schema is updated. Currently not available from API
  // 'question_text,        // TODO: Uncomment after schema is updated. Currently not available from API
  'content',
  'attachment_content',
]);

export const ALIGN_SURVEY_DISPLAY_ATTRIBUTES: IAssetAttribute[] = COMMON_DISPLAY_ATTRIBUTES.concat([
  // 'date',      // timestamp?
  // 'questions'  // TODO: Uncomment after schema is updated. Currently not available from API
  'content',
]);

export const WATERS_ELN_DISPLAY_ATTRIBUTES: IAssetAttribute[] = COMMON_DISPLAY_ATTRIBUTES.concat([
  'content',
  'extracted_molecules',
  'extracted_entities',
  // date: 'Date', // TODO: Uncomment after schema is updated. Currently not available from API
]);

export const SHAREPOINT_DISPLAY_ATTRIBUTES: IAssetAttribute[] = COMMON_DISPLAY_ATTRIBUTES.concat([
  // 'geography',   // TODO: Uncomment after schema is updated. Currently not available from API
  // 'quarterly',   // TODO: Uncomment after schema is updated. Currently not available from API
  'region',
  // 'sub_region'   // TODO: Uncomment after schema is updated. Currently not available from API
]);

export const ALL_DISPLAY_ATTRIBUTES: IAssetAttribute[] = Array.from(
  new Set([
    ...COMMON_DISPLAY_ATTRIBUTES,
    ...IRPC_DISPLAY_ATTRIBUTES,
    ...ALIGN_DISPLAY_ATTRIBUTES,
    ...C3_DISPLAY_ATTRIBUTES,
    ...ALIGN_SURVEY_DISPLAY_ATTRIBUTES,
    ...WATERS_ELN_DISPLAY_ATTRIBUTES,
    ...SHAREPOINT_DISPLAY_ATTRIBUTES,
  ])
).sort();
