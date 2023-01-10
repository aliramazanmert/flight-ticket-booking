import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Result from "../../components/result/Result";

import * as S from "./styles";

const Error = () => {
  const navigate = useNavigate();

  const handleReturnToStartClick = () => {
    navigate("/");
  };

  const footer = (
    <S.Footer>
      <Button onClick={handleReturnToStartClick} type="primary">
        Başa Dön
      </Button>
    </S.Footer>
  );

  return (
    <S.Container>
      <Result type="error" message="Kabin seçiminiz tamamlanamadı." footer={footer} />
    </S.Container>
  );
};

export default Error;
