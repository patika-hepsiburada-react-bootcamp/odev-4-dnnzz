import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../query/query";
import Dropdown from "./Dropdown";
import WeatherCardInfo from "./WeatherCardInfo";
import ReactLoading from "react-loading";

export default function WeatherCard() {
  // state for current selected city
  const [city, setCity] = useState("antalya");

  // useQuery hook for fetching data from graphQl -> variable given by Dropdown component
  const { loading, error, data } = useQuery(GET_WEATHER, { variables: { name: city } });

  if (loading) {
    return <ReactLoading type={"spinningBubbles"} height={200} width={200} className='spinner' />;
  }
  return error === true ? (
    <div>Error...</div>
  ) : (
    <div className='wrapper'>
      <Dropdown city={city} setCity={setCity} />
      <div className='weather-card'>
        <WeatherCardInfo weatherInfo={data} />
      </div>
    </div>
  );
}
