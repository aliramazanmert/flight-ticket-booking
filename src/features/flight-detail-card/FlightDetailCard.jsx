import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import Card from "../../components/card/Card";

import * as S from "./styles";

const FlightDetailCard = ({ flight }) => {
  return (
    <Card>
      <Row gutter={12} align="middle">
        <Col>
          <S.Big>{flight.arrivalDateTimeDisplay}</S.Big>
          <S.Middle>{flight.originAirport.city.code}</S.Middle>
          <S.Small>{flight.originAirport.city.name}</S.Small>
        </Col>
        <Col sm={12}>
          <S.Line />
        </Col>
        <Col>
          <S.Big>{flight.departureDateTimeDisplay}</S.Big>
          <S.Middle>{flight.destinationAirport.city.code}</S.Middle>
          <S.Small>{flight.destinationAirport.city.name}</S.Small>
        </Col>
        <Col style={{ textAlign: "center" }} flex="auto">
          <S.Small>Uçuş Süresi</S.Small>
          <S.Big>{flight.flightDuration}</S.Big>
        </Col>
      </Row>
    </Card>
  );
};

FlightDetailCard.propTypes = {
  flight: PropTypes.object.isRequired,
};

export default FlightDetailCard;
