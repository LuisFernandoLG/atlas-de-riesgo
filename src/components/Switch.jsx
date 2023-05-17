import React, { useState } from "react";
import styled from "styled-components";

export const Switch = ({
  checked,
  color = "#6ab04c",
  label = "",
  toggleSwitch,
}) => {


  return (
    <Container>
      <Label>{label}</Label>
      <Switch2>
        <Input {...{ color }} type="checkbox" defaultChecked={checked} />
        <Slider {...{ toggle:checked, color }} onClick={toggleSwitch} />
      </Switch2>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const Label = styled.label`
  font-weight: 800;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggle, color, theme }) =>
    toggle ? theme.colors.primary : theme.colors.tertiary};
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    content: "";

    position: absolute;
    left: 2px;
    bottom: 2px;

    width: 20px;
    height: 20px;
    border-radius: 100%;

    background-color: ${({ toggle, color, theme }) =>
      toggle ? "white" : theme.colors.primary};

    transition: 0.4s;
  }
`;

const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`;

const Switch2 = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ toggle, color }) => (toggle ? color : "white")};
  border-radius: 15px;
  transition: 0.4s;

  & ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
