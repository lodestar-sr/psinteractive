import React, {FC, FormEvent, useEffect, useState} from "react";
import {Input} from "../../../components";
import {ICoordinate} from "../../../utils/interfaces";
import "./style.css";

export interface ICoordinateFormProps {
  value: ICoordinate;
  onChange(coordinate: ICoordinate): void;
}

const CoordinateForm: FC<ICoordinateFormProps> = ({
  value,
  onChange,
}) => {
  const [coordinate, setCoordinate] = useState<ICoordinate>(value);

  useEffect(() => {
    setCoordinate(value);
  }, [value]);

  const onCoordinateChange = (field: string, value: string) => {
    setCoordinate({
      ...coordinate,
      [field]: value ? Number(value) : "",
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onChange(coordinate);
  };

  return (
    <div className="coordinate-form text-center mb-4" data-testid="coordinate-form">
      <form className="white-card d-inline-flex align-items-center flex-wrap" onSubmit={onSubmit}>
        <Input
          className="mr-5"
          type="number"
          name="latitude"
          label="Latitude"
          required
          value={coordinate.latitude}
          onChange={onCoordinateChange}
          data-testid="latitude-input"
        />
        <Input
          className="mr-5"
          type="number"
          name="longitude"
          label="Longitude"
          required
          value={coordinate.longitude}
          onChange={onCoordinateChange}
          data-testid="longitude-input"
        />

        <button className="btn btn-primary" data-testid="search-button">Search</button>
      </form>
    </div>
  );
};

export default CoordinateForm;
