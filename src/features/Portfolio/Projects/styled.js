
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 592px;
  border: 6px solid ${({ theme }) => theme.portfolio.border};
  padding: 56px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.portfolio.background};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: 0.5s;

  &:hover{
    border: 6px solid ${({ theme }) => theme.linkHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    max-width: 991px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 24px;
  }
`;

export const ProjectTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color:${({ theme }) => theme.portfolio.header};
  margin-top: 0;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
    line-height: 19.36px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.portfolio.description};
  margin: 24px 0;
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    line-height: 16.94px;
    margin: 16px 0;
  }
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

export const LinkTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.portfolio.linkTitle};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    line-height: 16.94px;
  }
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color:${({ theme }) => theme.portfolio.link};
  text-decoration-color: ${({ theme }) => theme.portfolio.underline};
  transition: 0.5s;
  word-break: break-word;
  

  &:hover{
    text-decoration-color: ${({ theme }) => theme.portfolio.linkHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    line-height: 16.94px;
  }
`;
