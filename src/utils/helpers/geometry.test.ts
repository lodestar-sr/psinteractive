import {Geometry} from "./geometry";

describe("Geometry Class", () => {

  it("angleToRadian()", () => {
    expect(Geometry.angleToRadian(0)).toBe(0);
    expect(Geometry.angleToRadian(180)).toBe(Math.PI);
  });

  it("getDistance()", () => {
    const distance = Geometry.getDistance(
      { latitude: 43.6665921, longitude: 23.351723 },
      { latitude: 42.7724527, longitude: 23.3558937 },
    );
    expect(Math.floor(distance)).toEqual(99424);
  });
});