import { IQuickRangeOption } from '.';
import { QuickDateRange, TimeGap } from './enums';

// Refresh time for a Read Operation after CRUD after a cud operation in solr approx. 1.5sec
export const SOLR_REFRESH_TIME = 1500;

export const PER_PAGE_OPTIONS = [5, 10, 20, 50];

// grid-view in survey page is col-4, which needs multiples of 3
export const PER_PAGE_OPTIONS_OF_3_MULTIPLE = [6, 12, 21, 48];

// max-num of records that can be exported
export const EXPORT_LIMIT = 500;

//can be customized for more quick-ranges - x month-Ago is x months ago from now..etc..time gap is for the part-division for x-axis range
export const QUICK_RANGE_OPTIONS: IQuickRangeOption[] = [
  { label: QuickDateRange.ALLTIME, monthAgo: 0, yearAgo: 10, daysAgo: 0, gap: TimeGap.YEAR },
  { label: QuickDateRange.PASTMONTH, monthAgo: 1, yearAgo: 0, daysAgo: 0, gap: TimeGap.DAY },
  { label: QuickDateRange.PASTWEEK, monthAgo: 0, yearAgo: 0, daysAgo: 7, gap: TimeGap.DAY },
  { label: QuickDateRange.POSTQUARTER, monthAgo: 3, yearAgo: 0, daysAgo: 0, gap: TimeGap.DAY },
];
