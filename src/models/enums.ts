export enum SortOption {
  RELEVANCY = 'RELEVANCY',
  INTERACTION_DATE = 'INTERACTION_DATE',
}

export enum RequestHandler {
  KMI_SEARCH = 'KMI_SEARCH',
  KMI_SUGGEST = 'KMI_SUGGEST',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum ResultViewType {
  Grid = 'Grid',
  List = 'List',
  Table = 'Table',
}

export enum ApplicationName {
  KMI = 'KMI',
  // CORPORATE = 'CORPORATE',
  // RND = 'RND'
}

export enum QuickDateRange {
  ALLTIME = 'All Time',
  PASTWEEK = 'Past Week',
  PASTMONTH = 'Past Month',
  POSTQUARTER = 'Past Quarter',
}

export enum TimeGap {
  MONTH = 'MONTH',
  YEAR = 'YEAR',
  DAY = 'DAY',
}

// TODO: Update this once, Application name has been added
export enum DataSource {
  ALIGN = 'Align',
  ALIGN_SURVEY = 'AlignSurvey',
  IRPC = 'IRPC',
  C3 = 'C3',
  SHAREPOINT = 'SharePoint',
}
