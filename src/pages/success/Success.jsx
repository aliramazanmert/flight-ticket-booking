import React from "react";
import { useSearchParams } from "react-router-dom";
import Result from "../../components/result/Result";

import * as S from "./styles";

const Success = () => {
  const [searchParams] = useSearchParams();

  const footer = (
    <S.Footer>
      <div>Toplam Tutar</div>
      <span>{searchParams.get("total")}</span>
    </S.Footer>
  );

  return (
    <S.Container>
      <Result type="success" message="Kabin seçiminiz tamamlandı." footer={footer} />
    </S.Container>
  );
};

export default Success;
