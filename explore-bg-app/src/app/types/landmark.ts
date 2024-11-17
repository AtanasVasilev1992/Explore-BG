export interface Landmark {
    id: string;
    name: string;
    location: string;
    region: string;
    description: string;
    workingHours: string;
    entryFee: string;
    imageUrl: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    contacts: {
      phone?: string;
      email?: string;
    };
  }