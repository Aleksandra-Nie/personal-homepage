import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 72px;
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 48px;
  }
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 128px;
    height: 128px;
    display: flex;
    align-self: start;
  }
`;