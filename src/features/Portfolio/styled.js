import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 24px 0 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
`;
