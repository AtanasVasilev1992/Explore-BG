import { Landmark } from "src/app/types/landmark";

export function transformServerData(serverData: any): Landmark {
  const fields = serverData.fields;

  return {
    id: fields.id.stringValue,
    name: fields.name.stringValue,
    location: fields.location.stringValue,
    region: fields.region.stringValue,
    description: fields.description.stringValue,
    workingHours: fields.workingHours.stringValue,
    entryFee: fields.entryFee.stringValue,
    imageUrl: fields.imageUrl.stringValue,
    coordinates: {
      latitude: parseFloat(fields.coordinates.mapValue.fields.latitude.stringValue),
      longitude: parseFloat(fields.coordinates.mapValue.fields.longitude.stringValue),
    },
    contacts: {
      phone: fields.contacts.mapValue.fields.phone?.stringValue,
      email: fields.contacts.mapValue.fields.email?.stringValue,
    },
  };
}