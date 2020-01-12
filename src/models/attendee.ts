export interface IAttendeeQueryData {
  attendees: IAttendee[];
}

export interface IViewModalQueryVars {
  docId: string;
}

export interface IAttendee {
  Name: string;
  Address: string;
  City: string;
  Country: string;
  Type: string;
}

// dummy attendee data
export const DUMMY_ATTENDEES: IAttendee[] = [
  { Name: 'Attendee1', Address: 'Address1', City: 'City1', Country: 'Country1', Type: 'Type' },
  { Name: 'Attendee2', Address: 'Address2', City: 'City2', Country: 'Country2', Type: 'Type' },
  { Name: 'Attendee3', Address: 'Address3', City: 'City3', Country: 'Country3', Type: 'Type' },
  { Name: 'Attendee4', Address: 'Address4', City: 'City4', Country: 'Country4', Type: 'Type' },
  { Name: 'Attendee5', Address: 'Address5', City: 'City5', Country: 'Country5', Type: 'Type' },
];
