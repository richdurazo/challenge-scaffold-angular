export interface Location {
  city?: string;
  state?: string;
}

export interface Chorus {
  id?: string;
  name?: string;
  description?: string;
  location?: Location;
  contactEmail?: string;
}
export class Location {
  city?: string;
  state?: string;
}
