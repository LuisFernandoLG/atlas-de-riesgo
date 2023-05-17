import { styled } from "styled-components";
import { Switch } from "../Switch";

export const MapPanel = ({
  toggleColonySwitch,
  isColonySwitchOn,
  isShelterSwitchOn,
  toggleShelterSwtich,
}) => {
  return (
    <StyledContainer>
      <h2>Opciones</h2>
      <List>
        <Switch checked={isShelterSwitchOn} toggleSwitch={toggleShelterSwtich} label="Refugios" />
        <Switch checked={isColonySwitchOn} toggleSwitch={toggleColonySwitch} label="Colonias" />
      </List>
    </StyledContainer>
  );
};

const List = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledContainer = styled.div`
  width: auto;
  height: auto;
  background: ${({ theme }) => theme.colors.secondary};
  z-index: 900;
  position: absolute;
  left: 2rem;
  top: 2rem;

  padding: 1rem;
  border-radius: 10px;
`;
