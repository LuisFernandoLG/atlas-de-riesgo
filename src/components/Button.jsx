import React from "react";
import { styled } from "styled-components";

export const Button = ({
  pd,
  mg,
  borderRadius,
  width,
  height,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      style={{ padding: pd, margin: mg, borderRadius, width, height }}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;
