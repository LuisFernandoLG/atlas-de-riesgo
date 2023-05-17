import { Pacifico } from "next/font/google";
import { styled } from "styled-components";

const pacificoFont = Pacifico({ subsets: ["latin"], weight: "400" });

export const Header = () => {
  return <HeaderStyled>
    <LetterLogo className={pacificoFont.className}>Atlas</LetterLogo>
    <Leyend> de riesgo</Leyend>
  </HeaderStyled>;
};

const HeaderStyled = styled.header`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.primary};

  margin: 0 0;
  padding: 1rem;

  display: flex;
  align-items: flex-end;
`;

const LetterLogo = styled.h3`
  font-size: 2rem;
  color: ${({ theme: { colors } }) => colors.letterLogo};
  line-height: 2rem;
`;
const Leyend = styled.p`
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 800;
  background: ${({ theme: { colors } }) => colors.secondary};
  padding: 0.2rem;
  margin-left: 0.5rem;
  border-radius: 5px;
`;
