import {ICoordinate} from "./coordinate.interface";

export interface IPartner extends ICoordinate {
  partner_id: number;
  name: string;
  distance: number;
}
