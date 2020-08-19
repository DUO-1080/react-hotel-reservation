import React, { useContext } from "react";

import Title from "./Title";

import { RoomContext } from "../context";

const RoomsFilter = () => {
  const {
    minPrice,
    maxPrice,
    price,
    minSize,
    maxSize,
    type,
    capacity,
    roomTypes,
    handleFilterChange,
    roomCapacitys,
    breakfast,
    pets,
  } = useContext(RoomContext);
  return (
    <section className="filter-container">
      <Title title="Search Room " />

      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select className="form-control" name="type" id="type" value={type} onChange={handleFilterChange}>
            {["all", ...roomTypes].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">room capacity</label>
          <select
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleFilterChange}>
            {[...roomCapacitys].map((capacity) => (
              <option key={capacity} value={capacity}>
                {capacity}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            onChange={handleFilterChange}
            className="form-control"
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleFilterChange}
            />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="breakfast">breakfast</label>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handleFilterChange}
              value={breakfast}
            />
          </div>
          <div className="single-extra">
            <label htmlFor="pets">allowed pets</label>
            <input type="checkbox" name="pets" id="pets" onChange={handleFilterChange} value={pets} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
