import React from "react";
import { cities } from "../data/cities";

export default function Dropdown({ city, setCity }) {
  return (
    <div className='dropdown'>
      <select onChange={(e) => setCity(e.target.value)} name='cities' id='cities' value={city}>
        {cities.map((city) => (
          <option key={city.plate} value={city.name}>
            {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
