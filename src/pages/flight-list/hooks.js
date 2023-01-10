import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { getFlightsByCities } from "../../shared/utils";

export const useFlights = (sorterField) => {
  const [searchParams] = useSearchParams();

  const flights = useMemo(
    () =>
      getFlightsByCities({
        originCity: searchParams.get("originCity"),
        destinationCity: searchParams.get("destinationCity"),
        sorterField,
      }),
    [searchParams, sorterField]
  );

  const flight = flights[0];

  const flightTitle = `${flight.originAirport.city.name} - ${
    flight.destinationAirport.city.name
  }, ${searchParams.get("numberOfPassengers")} Yolcu`;

  return { flights, flightTitle };
};
