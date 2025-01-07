import styled from "styled-components";
import { ReactComponent as SpinnerSign } from "../../../../images/spinner.svg";

export const Wrapper = styled.div`
  max-width: 475px;
  margin: auto;
  text-align: center;
`;

export const Message = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color:${({ theme }) => theme.text.header};
  margin: 88px 0 48px ;
`;

export const SpinnerIcon = styled(SpinnerSign)`
  color:${({ theme }) => theme.icon};
  width: 160px;
  height: 160px;
  animation: 1s linear normal infinite rotation;

  @keyframes rotation {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
`;