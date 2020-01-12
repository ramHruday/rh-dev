import { ApplicationName } from './enums';

export interface IBookmark {
  id?: string;
  name?: string;
  assetId?: string;
  applicationName?: ApplicationName;
  timestamp?: string;
}
