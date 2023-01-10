import React, { useState } from "react";
import { Form, Switch, Button } from "antd";

import FlightListFeature from "../../features/flight-list/FlightList";
import * as S from "./styles";
import { useFlights } from "./hooks";

const ECO_PRICE_KEY = "fareCategories.ECONOMY.subcategories[0].price.amount";
const DEPARTURE_TIME_KEY = "arrivalDateTimeDisplay";

const FlightList = () => {
  const [isPromoCodeEnabled, setIsPromoCodeEnabled] = useState(false);
  const [sorterField, setSorterField] = useState(ECO_PRICE_KEY);

  const { flights, flightTitle } = useFlights(sorterField);

  const handleEcoPriceSorterClick = () => {
    setSorterField(ECO_PRICE_KEY);
  };

  const handleDepartureTimeSorterClick = () => {
    setSorterField(DEPARTURE_TIME_KEY);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Flight>Uçuş</S.Flight>
        <h1>{flightTitle}</h1>
        <Form.Item colon={false} label="Promosyon Kodu">
          <Switch checked={isPromoCodeEnabled} onChange={setIsPromoCodeEnabled} />
        </Form.Item>
        {isPromoCodeEnabled && (
          <div style={{ marginBottom: "24px" }}>
            <p>
              Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimle satın
              alabilirsiniz!
            </p>
            <p>Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır.</p>
          </div>
        )}
      </S.Header>
      <S.Sorters>
        <span>Sıralama Kriteri</span>
        <Button onClick={handleEcoPriceSorterClick} ghost={sorterField !== ECO_PRICE_KEY}>
          Ekonomi Ücreti
        </Button>
        <Button onClick={handleDepartureTimeSorterClick} ghost={sorterField !== DEPARTURE_TIME_KEY}>
          Kalkış Saati
        </Button>
      </S.Sorters>
      <FlightListFeature flights={flights} isPromoCodeEnabled={isPromoCodeEnabled} />
    </S.Container>
  );
};

export default FlightList;
