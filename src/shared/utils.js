import { get } from "lodash";
import flightsData from "../data/flights.json";

export const findFlightByCities = ({ originCity, destinationCity }) => {
  return flightsData.flights.find(
    (flight) =>
      !originCity.localeCompare(flight.originAirport.city.name, "en", {
        sensitivity: "base",
      }) &&
      !destinationCity.localeCompare(flight.destinationAirport.city.name, "en", {
        sensitivity: "base",
      })
  );
};

export const getFlightsByCities = ({ originCity, destinationCity, sorterField }) => {
  const filteredFlights = flightsData.flights.filter(
    (flight) =>
      !originCity.localeCompare(flight.originAirport.city.name, "en", {
        sensitivity: "base",
      }) &&
      !destinationCity.localeCompare(flight.destinationAirport.city.name, "en", {
        sensitivity: "base",
      })
  );

  if (sorterField) {
    return filteredFlights.sort((f1, f2) => get(f1, sorterField) - get(f2, sorterField));
  }

  return filteredFlights;
};
