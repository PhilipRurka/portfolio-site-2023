import styled from 'styled-components';
import { Fonts } from '../../styles/typography';
import { Colors } from '../../styles/color';

export const SkillsStyled = styled.div`

`;

export const SkillsWrapper = styled.div`
  &:last-child ul {
    margin-bottom: 0;
  }

  @media print {
    break-inside: avoid; 
  }
`;

export const SkillType = styled.h3`
  ${Fonts.roboto}
  font-weight: 800;
  color: ${Colors.eucalyptus};
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5px 0 20px;
`;

export const SkillItem = styled.li`
  
`;

export const Skill = styled.span`
  font-size: 12px;
  text-decoration: underline;
  white-space: nowrap;
  letter-spacing: 0.5px;
`;