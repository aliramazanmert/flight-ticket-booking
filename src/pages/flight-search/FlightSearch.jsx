import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import FlightSearchFeature from "../../features/flight-search/FlightSearch";
import { findFlightByCities } from "../../shared/utils";
import * as S from "./styles";

const initialValues = {
  originCity: localStorage.getItem("latestOrigin") || "",
  destinationCity: localStorage.getItem("latestDestination") || "",
  numberOfPassengers: 1,
};

const FlightSearch = () => {
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const handleSearchFlight = (values) => {
    const isFlightFound = findFlightByCities({
      originCity: values.originCity,
      destinationCity: values.destinationCity,
    });

    if (isFlightFound) {
      localStorage.setItem("latestOrigin", values.originCity);
      localStorage.setItem("latestDestination", values.destinationCity);
      navigate({
        pathname: "/flights",
        search: new URLSearchParams(values).toString(),
      });
    } else {
      modal.error({
        content: (
          <div style={{ marginLeft: "12px", fontSize: "18px" }}>
            Seçtiğiniz kriterlerde uçuş bulunamadı
          </div>
        ),
        okText: "Kapat",
        icon: <FontAwesomeIcon color="#e81932" size="4x" icon={faTriangleExclamation} />,
        width: 500,
        okButtonProps: {
          size: "large",
        },
      });
    }
  };
  console.log(initialValues);

  return (
    <S.Container>
      {contextHolder}
      <div>
        <S.Title>Merhaba</S.Title>
        <S.Description>Nereyi keşfetmek istersiniz?</S.Description>
        <FlightSearchFeature initialValues={initialValues} onSearchFlight={handleSearchFlight} />
      </div>
    </S.Container>
  );
};

export default FlightSearch;
