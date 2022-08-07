import React, {useEffect, useMemo, useState} from "react";
import CoordinateForm from "./CoordinateForm";
import {Geometry, parsePartners} from "../../utils/helpers";
import {ICoordinate, IPartner} from "../../utils/interfaces";
import "./style.css";

const HomePage = () => {
  const [partners, setPartners] = useState<IPartner[]>([]);
  const [homeCoordinate, setHomeCoordinate] = useState<ICoordinate>({
    latitude: 42.6665921,
    longitude: 23.351723,
  });

  useEffect(() => {
    fetch("/data/partners.txt")
      .then((res) => res.text())
      .then((data) => {
        setPartners(parsePartners(data));
      });
  }, []);

  const filteredPartners = useMemo(() => {
    const range = 100000;   // 100km
    return partners.filter((partner) => {
      partner.distance = Geometry.getDistance(homeCoordinate, partner);
      return partner.distance <= range;
    }).sort((a, b) => {
      return a.partner_id - b.partner_id;
    });
  }, [partners, homeCoordinate]);

  return (
    <div className="homepage">
      <CoordinateForm value={homeCoordinate} onChange={setHomeCoordinate} />

      <div className="white-card">
        <h3 className="mb-3">Partners within 100km</h3>
        <table data-testid="partners-table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Distance</th>
            <th>Coordinate</th>
          </tr>
          </thead>
          <tbody>
          {filteredPartners.map((partner) => (
            <tr key={partner.partner_id}>
              <td>{partner.partner_id}</td>
              <td>{partner.name}</td>
              <td>{Math.floor(partner.distance) / 1000} km</td>
              <td>({partner.latitude}, {partner.longitude})</td>
            </tr>
          ))}
          {!filteredPartners.length && (
            <tr>
              <td className="text-center p-4" colSpan={4}>No Partners Found</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
