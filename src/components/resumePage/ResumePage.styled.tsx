import styled from 'styled-components';
import { ContainerLayout } from '../../styles/layout';

export const ResumePageStyled = styled.div`
  padding-bottom: 50px;
`;

export const ResumeWrapper = styled.div`
  
`;

export const Main = styled.main`
  ${ContainerLayout.desktop}
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 40px;
  margin-top: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 50px;
    gap: unset;
  }

  @media (max-width: 600px) {
    padding: 0 30px;
  }
`;

export const LeftColumn = styled.div`
  
`;

export const RightColumn = styled.div`
  
`;