import styled from "styled-components";
import { ReactComponent as GitHub } from '../../../images/github.svg';

export const Wrapper = styled.header`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  color: ${({ theme }) => theme.text.header};
  margin-top: 12px;
  margin-bottom: 8px;
`;

export const Caption = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.text.header};
  margin: 0;
`;

export const GithubIcon = styled(GitHub)`
  color: ${({ theme }) => theme.icon};
  width: 40px;
  height: 40px;
`;