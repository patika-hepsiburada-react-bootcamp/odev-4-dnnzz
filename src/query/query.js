import { gql } from "@apollo/client";

// query by city name and get weather info from graphQl

export const GET_WEATHER = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
        }
        temperature {
          actual
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
        timestamp
      }
    }
  }
`;
