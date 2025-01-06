import styled from "styled-components";
import { ReactComponent as BulletIcon } from '../../images/bullet.svg';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.background.section};
  box-shadow: ${({ theme }) => theme.shadow};
  max-width: 1216px;
  padding: 32px;
  border-radius: 4px;
  margin: 0 auto 72px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 16px;
    margin: 0 auto 48px;
  }
`;

export const Header = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.text.header};
  max-width: 1151px;
  line-height: 1.21;
  letter-spacing: 0.05em;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 26px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  max-width: 1151px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  margin: 0;
  padding-left: 0;
  grid-gap: 8px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 16.94px;
    padding-top: 12px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.text.paragraph};
  display: flex;
`;

export const Bullet = styled(BulletIcon)`
  color:${({ theme }) => theme.bullet};
  width: 9px;
  height: 9px;
  margin-right: 16px;
  align-self: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 6px;
    height: 6px;
    margin-right: 8px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.divider};
  margin: 15px auto 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 12px;
  }
`;

