import { QuickDateRange, TimeGap } from './enums';

export interface IPieSlice {
  value: string | number;
  name: string;
}

export interface IInteractionLineChartSeries {
  withoutCommentsLineSeries: number[];
  withCommentsLineSeries: number[];
  xAxisData: string[];
}

export interface ILineMerge {
  [key: string]: number[];
}

export interface IQuickRangeOption {
  label: QuickDateRange;
  monthAgo: number;
  yearAgo: number;
  daysAgo: number;
  gap: TimeGap;
}
