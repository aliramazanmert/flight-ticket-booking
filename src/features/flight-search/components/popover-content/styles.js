import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 12px;
  padding-top: 20px;
  padding: 20px 8px 12px 8px;

  > div > label {
    color: #96979a;
  }
`;

export const PassengersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;

  > div > button {
    color: #858689 !important;
    width: 40px;
    height: 40px;
    padding: 0;
    background-color: #ebedee !important;
  }
`;

export const PassengerButtons = styled.div`
  display: flex;
  align-items: center;

  > span {
    width: 48px;
    text-align: center;
  }
`;
