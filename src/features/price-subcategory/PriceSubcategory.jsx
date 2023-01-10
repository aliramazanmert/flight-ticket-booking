import React from "react";
import { Button } from "antd";

import { BRAND_CODES, BRAND_CODE_TO_LABEL } from "./constants";

import * as S from "./styles";

const PriceSubcategory = ({ data, isPromoCodeEnabled, onSelectFlight }) => {
  const {
    price: { currency, amount },
    brandCode,
    rights,
  } = data;

  const getPrice = () => {
    if (isPromoCodeEnabled && brandCode === BRAND_CODES.ECO_FLY) return amount / 2;
    return amount;
  };

  const isDisabled = isPromoCodeEnabled && brandCode !== BRAND_CODES.ECO_FLY;

  const handleSelectFlight = () => {
    onSelectFlight(data);
  };

  return (
    <S.Container>
      <S.Header>
        <div>{BRAND_CODE_TO_LABEL[brandCode]}</div>
        <div>
          <sup>{currency}</sup>
          <span>{getPrice()}</span>
        </div>
      </S.Header>
      <S.Body>
        {rights.map((right) => (
          <div key={right}>{right}</div>
        ))}
      </S.Body>
      <Button onClick={handleSelectFlight} disabled={isDisabled} type="primary">
        Uçuşu Seç
      </Button>
    </S.Container>
  );
};

export default PriceSubcategory;
