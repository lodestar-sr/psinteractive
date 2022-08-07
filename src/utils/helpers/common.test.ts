import {parsePartners} from "./common";

describe("Common Helper", () => {

  it("parsePartners()", () => {
    const input = `{"latitude": "42.6661417", "partner_id": 12, "name": "Bluebell Robles", "longitude": "23.293435"}
      {"latitude": "42.7034111", "partner_id": 1, "name": "Jamelia Waller", "longitude": "23.4862259"}
      {"latitude": "42.1268151", "partner_id": 2, "name": "Devon Mac", "longitude": "24.7234766"}`;
    const output = [
      {latitude: 42.6661417, partner_id: 12, name: "Bluebell Robles", longitude: 23.293435, distance: 0},
      {latitude: 42.7034111, partner_id: 1, name: "Jamelia Waller", longitude: 23.4862259, distance: 0},
      {latitude: 42.1268151, partner_id: 2, name: "Devon Mac", longitude: 24.7234766, distance: 0},
    ];

    expect(parsePartners(input)).toEqual(output);
  });
});