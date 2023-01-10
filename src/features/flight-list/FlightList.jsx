import React, { useState } from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import FlightDetailCard from "../flight-detail-card/FlightDetailCard";
import PriceCard from "../price-card/PriceCard";
import PriceSubcategory from "../price-subcategory/PriceSubcategory";
import Card from "../../components/card/Card";

import * as S from "./styles";

const FLIGHT_STATUSES = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
};

const FlightList = ({ flights, isPromoCodeEnabled }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();

  const selectedTicketType = selected?.split("-")[1];

  const handlePriceCardClick = (value) => {
    setSelected(value);
  };

  const handleSelectFlight = (selectedFlight) => {
    if (selectedFlight.status === FLIGHT_STATUSES.ERROR) {
      navigate("/error");
      return;
    }
    navigate({
      pathname: "/success",
      search: new URLSearchParams({
        total: `${selectedFlight.price.currency} ${selectedFlight.price.amount}`,
      }).toString(),
    });
  };

  const renderFlightItem = (flight) => {
    const economyRadioValue = `${flight.id}-ECONOMY`;
    const businessRadioValue = `${flight.id}-BUSINESS`;
    const isEconomySelected = selected === economyRadioValue;
    const isBusinessSelected = selected === businessRadioValue;

    return (
      <React.Fragment key={flight.id}>
        <Row gutter={12} align="stretch">
          <Col sm={12}>
            <FlightDetailCard flight={flight} />
          </Col>
          <Col sm={6}>
            <PriceCard
              ticketType="ECONOMY"
              prices={flight.fareCategories.ECONOMY.subcategories}
              radioValue={economyRadioValue}
              onClick={() => handlePriceCardClick(economyRadioValue)}
            />
            {isEconomySelected && <S.Connector />}
          </Col>
          <Col sm={6}>
            <PriceCard
              ticketType="BUSINESS"
              prices={flight.fareCategories.BUSINESS.subcategories}
              radioValue={businessRadioValue}
              onClick={() => handlePriceCardClick(businessRadioValue)}
            />
            {isBusinessSelected && <S.Connector />}
          </Col>
        </Row>
        {isEconomySelected || isBusinessSelected ? (
          <Row>
            <Col sm={24}>
              <Card>
                <Row gutter={12}>
                  {Array.from(Array(3).keys()).map((index) => (
                    <Col key={index} sm={8}>
                      <PriceSubcategory
                        data={flight.fareCategories[selectedTicketType].subcategories[index]}
                        isPromoCodeEnabled={isPromoCodeEnabled}
                        onSelectFlight={handleSelectFlight}
                      />
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          </Row>
        ) : null}
      </React.Fragment>
    );
  };
  return <S.Container value={selected}>{flights.map(renderFlightItem)}</S.Container>;
};

FlightList.propTypes = {
  flights: PropTypes.array,
  isPromoCodeEnabled: PropTypes.bool,
};

FlightList.defaultProps = {
  flights: [],
  isPromoCodeEnabled: false,
};

export default FlightList;
