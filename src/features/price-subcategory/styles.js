import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    height: 54px;
    font-size: 18px;
  }
`;

export const Header = styled.div`
  padding: 24px 12px;
  background-color: #F9F9F9;
  font-size: 24px;
  display: flex;
  justify-content: space-between;

  sup {
    font-size: 12px;
    margin-right: 6px;
  }
`;

export const Body = styled.div`
  font-size: 14px;
  border: solid 1px #d9d9d9;
  min-height: 250px;
  font-family: MuseoSans-300;

  > div {
    padding: 12px;
    border-bottom: solid 1px #d9d9d9;
  }
`;
