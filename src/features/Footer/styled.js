import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 691px;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-top: 48px;
  }
`;

export const Caption = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.paragraph};
  margin: 0 0 24px;
  letter-spacing: initial;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 0 0 12px;
  }
`;

export const Contact = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 38.73px;
  color: ${({ theme }) => theme.text.header};
  text-decoration: none;
  transition: 0.5s;

  &:hover{
      color: ${({ theme }) => theme.linkHover};
    }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const Description = styled.p`
  max-width: 670px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  color: ${({ theme }) => theme.text.header};
  margin: 24px 0 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    line-height: 16.94px;
    margin:12px 0 40px;
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
`;

export const IconLink = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: ${({ theme }) => theme.text.header};
    transition: 0.5s;

    &:hover {
      fill: ${({ theme }) => theme.icon};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 32px;
    height: 32px;
  }
`;
