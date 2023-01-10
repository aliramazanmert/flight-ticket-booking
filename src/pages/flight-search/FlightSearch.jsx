import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import FlightSearchFeature from "../../features/flight-search/FlightSearch";
import { findFlightByCities } from "../../shared/utils";
import * as S from "./styles";

const FlightSearch = () => {
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const handleSearchFlight = (values) => {
    const isFlightFound = findFlightByCities({
      originCity: values.originCity,
      destinationCity: values.destinationCity,
    });

    if (isFlightFound) {
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

  return (
    <S.Container>
      {contextHolder}
      <div>
        <S.Title>Merhaba</S.Title>
        <S.Description>Nereyi keşfetmek istersiniz?</S.Description>
        <FlightSearchFeature onSearchFlight={handleSearchFlight} />
      </div>
    </S.Container>
  );
};

export default FlightSearch;
