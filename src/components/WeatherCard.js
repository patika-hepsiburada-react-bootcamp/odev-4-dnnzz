import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../query/query";
import Dropdown from "./Dropdown";
import WeatherCardInfo from "./WeatherCardInfo";

export default function WeatherCard() {
  // state for current selected city
  const [city, setCity] = useState("antalya");

  // useQuery hook for fetching data from graphQl -> variable given by Dropdown component
  const { loading, error, data } = useQuery(GET_WEATHER, { variables: { name: city } });

  if (loading) {
    return <div>Loading..</div>;
  }
  return error === true ? (
    <div>Error...</div>
  ) : (
    <div className='wrapper'>
      <Dropdown city={city} setCity={setCity} />
      <div className='weather-card'>
        {console.log(data)}
        <WeatherCardInfo weatherInfo={data} />
      </div>
    </div>
  );
}
