import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Radio } from "antd";
import { useFormikContext } from "formik";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 9;

const PopoverContent = () => {
  const { setFieldValue, values } = useFormikContext();

  const decrementNumberOfPassengers = () => {
    if (values.numberOfPassengers > MIN_PASSENGERS)
      setFieldValue("numberOfPassengers", values.numberOfPassengers - 1);
  };

  const incrementNumberOfPassengers = () => {
    if (values.numberOfPassengers < MAX_PASSENGERS)
      setFieldValue("numberOfPassengers", values.numberOfPassengers + 1);
  };

  return (
    <S.Container>
      <Radio.Group defaultValue={1}>
        <Radio value={1}>Economy Class</Radio>
        <Radio value={2}>Business Class</Radio>
      </Radio.Group>
      <S.PassengersContainer>
        <span>Yolcu</span>
        <S.PassengerButtons>
          <Button type="primary" onClick={decrementNumberOfPassengers}>
            <FontAwesomeIcon size="lg" icon={faMinus} />
          </Button>
          <span>{values.numberOfPassengers}</span>
          <Button type="primary" onClick={incrementNumberOfPassengers}>
            <FontAwesomeIcon size="lg" icon={faPlus} />
          </Button>
        </S.PassengerButtons>
      </S.PassengersContainer>
    </S.Container>
  );
};

export default PopoverContent;
