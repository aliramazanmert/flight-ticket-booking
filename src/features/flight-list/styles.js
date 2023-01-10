import styled from "styled-components";
import { Radio } from "antd";

export const Container = styled(Radio.Group)`
  background-color: #f9f9f9;
  padding: 16px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Connector = styled.div`
  position: relative;
  top: -2px;
  z-index: 10;
  width: 100%;
  height: 16px;
  background-color: #fff;
`;
