import React from "react";
import { styled } from "styled-components";
import { MdGpsFixed } from "react-icons/md";
import { Button } from "../Button";
import { useMap } from "react-leaflet";

export const MapControlButtons = ({ userLocation }) => {
  const map = useMap();

  const flyToUserPosition = () => {
    map.flyTo(
      [userLocation.coords.latitude, userLocation.coords.longitude],
      17
    );
  };

  return (
    <StyledContainer>
      <Button onClick={flyToUserPosition} borderRadius={"20rem"}>
        <MdGpsFixed size="30px" />
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: auto;
  height: auto;
  background: ${({ theme }) => theme.colors.secondary};
  z-index: 900;
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  padding: 0.5rem;
  border-radius: 10px;
`;
