import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from '../../../images/envelope.svg';

export const Wrapper = styled.div`
  max-width: 633px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    max-width: 991px;
  }
`;

export const Caption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.text.paragraph};
  margin-bottom: 12px;
  letter-spacing: initial;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 45.99px;
  color: ${({ theme }) => theme.text.header};
  margin-bottom: 35px;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 22px;
    line-height: 26.63px;
    margin-bottom: 16px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.text.paragraph};
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 17px;
    line-height: 23.8px;
  }
`;

export const Button = styled.a`
  font-size: 20.06px;
  font-weight: 600;
  line-height: 24.28px;
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.button.background};
  border-radius: 4px;
  border: 1px solid  ${({ theme }) => theme.button.border}; 
  padding: 12px 16px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  transition: 0.5s;

  &:hover{
    box-shadow: ${({ theme }) => theme.button.hoverShadow};
  }

  &:active{
    box-shadow: ${({ theme }) => theme.button.activeShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 12px;
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const Envelope = styled(EnvelopeIcon)`
  color: ${({ theme }) => theme.button.text};
  width: 24px;
  height: 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 20px;
    height: 20px;
  }
`;