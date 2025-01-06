import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: 119px auto 109px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    margin: 34px auto 31px auto;
  }
`;