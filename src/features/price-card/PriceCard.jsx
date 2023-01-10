import React from "react";
import { Row, Col, Radio } from "antd";
import Card from "../../components/card/Card";

import * as S from "./styles";

const PriceCard = ({ prices, ticketType, onClick, radioValue }) => {
  const lowestPrice = prices[0].price.amount;
  const { currency } = prices[0].price;

  return (
    <S.Container onClick={onClick}>
      <Card>
        <Row gutter={0} align="middle">
          <Col>
            <Radio value={radioValue}>
              <S.Small>{ticketType}</S.Small>
            </Radio>
          </Col>
          <Col>
            <S.Small>Yolcu başına</S.Small>
            <S.Big>{`${currency} ${lowestPrice}`}</S.Big>
          </Col>
        </Row>
      </Card>
    </S.Container>
  );
};

export default PriceCard;
