import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;

  > div {
    font-size: 28px;
    font-family: MuseoSans-100;
  }

  > span {
    font-size: 22px;
    color: #3685E7;
  }
`;