import { ApplicationName } from './enums';

export interface ISavedSearch {
  id?: string;
  name?: string;
  query?: string;
  filters?: string[];
  applicationName?: ApplicationName;
  timestamp?: string;
}
