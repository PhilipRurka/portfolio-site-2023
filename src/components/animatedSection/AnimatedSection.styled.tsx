import styled from 'styled-components';
import { Colors } from '../../styles/color';

export const AnimatedSectionStyled = styled.section`
  margin-top: 40px;
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
`;

export const Underline = styled.div`
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 3px solid ${Colors.dodger};
`;