import styled from "styled-components";

export const Container = styled.div`
  padding-top: 64px;
  background-color: #063048;
  width: 100vw;
  min-height: 100vh;
  color: #fff;
  font-family: MuseoSans-100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Inputs = styled.div`
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

export const Title = styled.div`
  font-size: 32px;
  text-align: center;
`;
export const Description = styled.div`
  text-align: center;
  font-size: 24px;
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

export const PopoverContainer = styled.div`
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
