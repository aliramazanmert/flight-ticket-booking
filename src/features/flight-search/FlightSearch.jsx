import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Popover, Button } from "antd";
import { Formik } from "formik";
import PropTypes from "prop-types";

import Input from "../../components/input/Input";
import PopoverContent from "./components/popover-content/PopoverContent";
import { getPassengersIcon } from "./utils";
import * as S from "./styles";

const FlightSearch = ({ initialValues, onSearchFlight }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSearchFlight}>
      {({ values, handleChange, submitForm }) => (
        <S.Container>
          <Input
            name="originCity"
            onChange={handleChange}
            prefix={<FontAwesomeIcon size="lg" icon={faPlaneDeparture} />}
            placeholder="Nereden"
          />
          <Input
            name="destinationCity"
            onChange={handleChange}
            prefix={<FontAwesomeIcon size="lg" icon={faPlaneArrival} />}
            placeholder="Nereye"
          />
          <S.Box>
            <span>Tarih</span>
            <FontAwesomeIcon color="#C3CBD7" size="2x" icon={faCalendarDays} />
          </S.Box>
          <Popover
            placement="bottom"
            title="Kabin ve yolcu seçimi"
            content={<PopoverContent />}
            trigger="click"
          >
            <S.Box>
              <div style={{ marginTop: "24px" }}>
                {getPassengersIcon(values.numberOfPassengers)}
              </div>
              <S.NumPassengers>{values.numberOfPassengers}</S.NumPassengers>
            </S.Box>
          </Popover>
          <Button type="primary" onClick={submitForm}>
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
          </Button>
        </S.Container>
      )}
    </Formik>
  );
};

FlightSearch.propTypes = {
  initialValues: PropTypes.object,
  onSearchFlight: PropTypes.func.isRequired,
};

FlightSearch.defaultProps = {
  initialValues: {
    originCity: "",
    destinationCity: "",
    numberOfPassengers: 1,
  },
};

export default FlightSearch;
