import styled from "styled-components";
import { ReactComponent as AlertSign } from "../../../../images/alert.svg";

export const Wrapper = styled.div`
  max-width: 426.53px;
  margin: auto;
  text-align: center;
  margin-top: 88px;
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color: ${({ theme }) => theme.text.header};
  margin: 16px 0 32px;
`;

export const Message = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.text.header};
  margin: 0;
`;

export const AlertIcon = styled(AlertSign)`
  width: 37px;
  height: 33.34px;
  color: ${({ theme }) => theme.text.header};
`;

export const Button = styled.a`
  display: inline-block;
  margin: 32px 0 140px;
  background-color: ${({ theme }) => theme.button.background};
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.button.border};
  text-decoration: none;
  color: ${({ theme }) => theme.button.text};
  font-weight: 600;
  font-size: 20.06px;
  line-height: 24.28px;
  transition: 0.5s;

  &:hover{
    box-shadow: ${({ theme }) => theme.button.hoverShadow};
  }

  &:active{
    box-shadow: ${({ theme }) => theme.button.activeShadow};
  }
`;