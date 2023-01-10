import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

const ICONS = {
  success: <FontAwesomeIcon size="2x" color="#198754" icon={faCircleCheck} />,
  error: <FontAwesomeIcon size="2x" color="#e81932" icon={faCircleXmark} />,
};

const Result = ({ type, message, footer }) => {
  return (
    <div>
      <S.Container>
        <Row gutter={24} align="middle" style={{}}>
          <Col>
            <S.Icon>{ICONS[type]}</S.Icon>
          </Col>
          <Col>
            <S.Message>{message}</S.Message>
          </Col>
        </Row>
      </S.Container>
      {footer}
    </div>
  );
};

Result.propTypes = {
  type: PropTypes.oneOf(["error", "success"]).isRequired,
  message: PropTypes.string.isRequired,
  footer: PropTypes.node,
};

Result.defaultProps = {
  footer: null,
};

export default Result;
