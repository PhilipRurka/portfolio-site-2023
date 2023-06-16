import styled, { css } from 'styled-components';
import { Colors } from '../../styles/color';

type AnimatedSectionType = {
  nonBreak?: boolean
}

export const AnimatedSectionStyled = styled.section<AnimatedSectionType>`
  margin-top: 40px;

  ${props => props.nonBreak ? css`
    @media print {
      break-inside: avoid;
    }
  ` : ''}
`;

export const HeadingWrapper = styled.div`
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${Colors.dodger};
  text-transform: uppercase;
  margin-bottom: 18px;
  opacity: 0;

  @media print {
    opacity: 1 !important;
  }
`;

export const Underline = styled.div`
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 3px solid ${Colors.dodger};

  @media print {
    width: 100% !important;
  }
`;