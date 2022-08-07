import {IPartner} from "../interfaces";

export const parsePartners = (text: string) => {
  const lines = text.split(/\r?\n/);
  const partners: IPartner[] = [];
  lines.forEach((line) => {
    try {
      const data: IPartner = JSON.parse(line);
      partners.push({
        partner_id: data.partner_id,
        name: data.name,
        longitude: Number(data.longitude),
        latitude: Number(data.latitude),
        distance: 0,
      });
    } catch {
    }
  });
  return partners;
};