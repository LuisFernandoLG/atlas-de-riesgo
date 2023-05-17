import { useState } from "react";

export const useInfoMapRadio = () => {
  const [isShelterSwitchOn, setIsShelterSwitchOn] = useState(false);
  const [isColonySwitchOn, setIsColonySwitchOn] = useState(false);

  const toggleShelterSwtich = () =>
    setIsShelterSwitchOn(() => !isShelterSwitchOn);

  const toggleColonySwitch = () => setIsColonySwitchOn(!isColonySwitchOn);

  return {
    toggleColonySwitch,
    toggleShelterSwtich,
    isColonySwitchOn,
    isShelterSwitchOn,
  };
};
