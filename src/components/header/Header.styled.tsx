import styled, { css } from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/typography';
import { ContainerLayout } from '../../styles/layout';
import PrintSVG from '../../svg/PrintSVG';

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
  position: relative;
  padding: 50px 0 30px;
  color: white;
  background-color: ${Colors.dodger};

  @media print {
    background-color: white;
    padding-bottom: 0;
  }
`;

export const HeaderWrapper = styled.div`
  ${ContainerLayout.desktop}

  @media (max-width: 1000px) {
    padding: 0 50px;
  }

  @media (max-width: 700px) {
    padding: 0 30px;

    li {
      margin-top: 10px;

      &:first-child {
        margin: 0;
      }
    }
  }
`;

export const PrintIconWrapper = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;

  @media print {
    display: none;
  }
`;

export const PrintIcon = styled(PrintSVG)``;

export const Name = styled.h1`
  font-size: 50px;

  @media print {
    color: ${Colors.tropicaRainForest};
  }
`;

export const Title = styled.span`
  font-size: 30px;
  margin: 15px 0;
  
  @media print {
    color: ${Colors.dodger};
  }
`;

export const ContactList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    max-width: 480px;
    row-gap: 15px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    max-width: unset;
    row-gap: unset;
  }

  @media print {
    font-weight: 800;
    color: black;
  }
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