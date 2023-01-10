import styled from "styled-components";

export const Container = styled.div`
  font-size: 18px;
  padding: 12px 48px;
`;

export const Header = styled.div`
  width: 100%;
  font-family: MuseoSans-100;
  display: flex;
  flex-direction: column;

  label {
    font-family: MuseoSans-700;
    font-size: 16px !important;
  }

  p {
    font-family: MuseoSans-300;
    font-size: 16px !important;
  }
`;

export const Sorters = styled.div`
  font-family: MuseoSans-300;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
  background-color: #232b38;
  color: #fff;
  padding: 24px 8px;
  font-size: 14px;

  button {
    :hover {
      background-color: #fff !important;
      border-color: #fff !important;
      color: #232b38 !important;
    }
  }

  .ant-btn-default {
    color: #232b38;
  }

  .ant-btn-background-ghost {
    color: #fff;
  }

  > span {
    margin-right: 24px;
  }
`;

export const Flight = styled.div`
  font-family: MuseoSans-500;
  background-color: #e81932;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  font-size: 18px;
  width: 180px;
`;

export const FlightsContainer = styled.div`
  background-color: #f9f9f9;
  padding: 24px;
  min-height: 100vh;
  font-size: 18px;
`;
