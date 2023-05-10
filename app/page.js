"use client";
import Map from "@/src/components/Map";
import { initMapPosition } from "@/src/constants/map";
import { themes } from "@/src/constants/theme";
import { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import { Pacifico } from "next/font/google";
import { InfoMapRadio } from "@/src/components/InfoMapRadio";
import { useInfoMapRadio } from "@/src/hooks/useInfoMapRadio";
import { Loader } from "@/src/components/Loader";

const pacificoFont = Pacifico({ subsets: ["latin"], weight:"400"});


export default function Home() {
  const [userLocation, setUserLocation] = useState(initMapPosition);
  const {enable, toggleState} = useInfoMapRadio(false)


  const setPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      const { latitude, longitude } = position.coords;
      setUserLocation([latitude, longitude]);
    });
  };

  useEffect(() => {
    setPosition();
  }, []);

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <Header>
        <LetterLogo className={pacificoFont.className}>Atlas</LetterLogo>
        <Leyend> de riesgo</Leyend>
      </Header>
      <GridContainer>
      <div>
      <h1>Información</h1>
      <InfoMapRadio label="Colonias" enable={enable} toggleState={toggleState}/>
      <Loader/>
      </div>
      <Map userLocation={userLocation} coloniesEnable={enable}/>
      </GridContainer>
    </ThemeProvider>
  );
}



const GridContainer = styled.div`
display: grid;
grid-template-columns: 550px 1fr;
background: ${({theme:{colors}})=>colors.background};
gap: 1rem;
padding: 1rem;

`

const Header = styled.header`
  width: 100%;
  background: ${({theme:{colors}})=>colors.primary};

  margin: 0 0;
  padding: 1rem;

  display: flex;
  align-items: flex-end;
`;

const LetterLogo = styled.h3`
  font-size: 2rem;
  color: ${({theme:{colors}})=>colors.letterLogo};
  line-height: 2rem;
  `;
const Leyend = styled.p`
  font-size: 1rem;
  color: ${({theme:{colors}})=>colors.white};
  background: ${({theme:{colors}})=>colors.secondary};
  padding: 0.2rem;
  margin-left: 0.2rem;
  border-radius: 5px;

`;

const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
  margin: 0 0;
  padding: 0 0;
}
`;
