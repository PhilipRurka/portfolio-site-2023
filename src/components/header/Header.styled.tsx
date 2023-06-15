import styled, { css } from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/typography';
import { ContainerLayout } from '../../styles/layout';

const sharedLink = css`
  ${Fonts.roboto}
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
  
  &,
  &:hover {
    color: inherit;
  }
`

export const HeaderStyled = styled.div`
  padding: 50px 0 30px;
  color: white;
  background-color: ${Colors.dodger};
`;

export const HeaderWrapper = styled.div`
  ${ContainerLayout.desktop}
`;

export const Name = styled.h1`
  font-size: 50px;
`;

export const Title = styled.span`
  font-size: 30px;
  margin: 15px 0;
`;

export const ContactList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ContactItem = styled.li`
  ${sharedLink}
`;

export const Email = styled.a`
  ${sharedLink}
`;

export const LinkedIn = styled.a`
  ${sharedLink}
`;

export const Github = styled.a`
  ${sharedLink}
`;