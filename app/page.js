"use client";

import { initMapPosition } from "@/src/constants/map";
import { themes } from "@/src/constants/theme";
import { Suspense, useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import { InfoMapRadio } from "@/src/components/InfoMapRadio";
import { useInfoMapRadio } from "@/src/hooks/useInfoMapRadio";
import { Loader } from "@/src/components/Loader";
import dynamic from "next/dynamic";
import { MapFallback } from "@/src/components/MapFallback";
import { Header } from "@/src/components/Header";
import { shelters } from "@/src/data/shelters";
import { useMap } from "@/src/hooks/useMap";
export const Map = dynamic(() => import("@/src/components/Map"), {
  ssr: false,
});

export default function Home() {
  const { userLocation } = useMap();
  

 
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <Container>
        <Header />
        <Suspense fallback={<MapFallback />}>
          <Map
            userLocation={userLocation}

          />
        </Suspense>
        {/* </GridContainer> */}
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  min-height: 90vh;
`;

const GlobalStyles = createGlobalStyle`
html{
  
}
*,*::after,*::before{
  margin: 0 0;
  padding: 0 0;
  box-sizing: border-box;
}

`;
