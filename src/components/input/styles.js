import styled from "styled-components";
import { Input } from "antd";

export const StyledInput = styled(Input)`
  border-radius: 0;
  width: 210px;
  font-size: 18px;

  :focus,
  :hover {
    border-color: #d9d9d9 !important;
  }

  > input {
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:active,
    :-webkit-autofill:focus,
    :-webkit-autofill::first-line {
      -webkit-box-shadow: 0 0 0 40px white inset !important;
      font-family: MuseoSans-500;
      font-size: 18px;
    }
  }

  .ant-input-prefix {
    margin-right: 8px;
  }
`;
