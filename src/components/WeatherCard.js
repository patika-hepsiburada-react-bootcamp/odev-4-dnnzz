import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../query/query";
import Dropdown from "./Dropdown";

export default function WeatherCard() {
  const [city, setCity] = useState("elazig");
  const { loading, error, data } = useQuery(GET_WEATHER, { variables: { name: city } });

  if (loading) {
    return <div>Loading..</div>;
  }
  return error === true ? (
    <div>Error...</div>
  ) : (
    <div className='wrapper'>
      <Dropdown city={city} setCity={setCity} />
      <div className='weather-card'>{console.log(loading, error, data)}</div>
    </div>
  );
}
