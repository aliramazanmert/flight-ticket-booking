import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(96 105 119 / 60%);
  padding: 24px;
  width: fit-content;
  margin-top: 12px;
  display: flex;
  gap: 8px;
  font-size: 18px;

  > * {
    height: 72px;
  }
`;

export const Box = styled.div`
  position: relative;
  background-color: #232b38;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 12px;
  font-family: MuseoSans-500;
  width: 88px;
  cursor: pointer;
`;

export const NumPassengers = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
`;
