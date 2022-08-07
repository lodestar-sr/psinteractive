import {ICoordinate} from "../interfaces";

export class Geometry {
  static EARTH_RADIUS = 6371008.8;

  static angleToRadian(angle: number): number {
    return angle * Math.PI / 180;
  }

  static getDistance(pt1: ICoordinate, pt2: ICoordinate): number {
    const long1 = Geometry.angleToRadian(pt1.longitude);
    const long2 = Geometry.angleToRadian(pt2.longitude);
    const lat1 = Geometry.angleToRadian(pt1.latitude);
    const lat2 = Geometry.angleToRadian(pt2.latitude);
    const longDiff = Math.abs(long1 - long2);
    const delta = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(longDiff));
    return Geometry.EARTH_RADIUS * delta;
  }
}