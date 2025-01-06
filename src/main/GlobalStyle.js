import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
box-sizing: border-box;
}

*, ::before, ::after {
box-sizing: inherit;
}

body {
    background-color: ${({ theme }) => theme.background.main};
    transition: background 0.5s;
    font-family: "Inter", sans-serif;
    margin: 14px;
    letter-spacing: 0.06em;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
      margin: 18px;
    }
  }
`;
