import React from "react";
import { StyledCard } from "./styles";

const Card = ({ children, ...other }) => {
  return (
    <StyledCard bordered={false} {...other}>
      {children}
    </StyledCard>
  );
};

export default Card;
