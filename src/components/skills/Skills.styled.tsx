import styled from 'styled-components';
import { Fonts } from '../../styles/typography';

export const SkillsStyled = styled.div`

`;

export const SkillsWrapper = styled.div`
  
`;

export const SkillType = styled.h3`
  ${Fonts.roboto}
  font-weight: 800;
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