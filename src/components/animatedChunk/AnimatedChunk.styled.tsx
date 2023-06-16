import styled from 'styled-components';

export const AnimatedChunkStyled = styled.div`
  & > *:not(ul),
  & > ul > li {
    opacity: 0;

    @media print {
      opacity: 1 !important;
      transform: translate(0, 0) !important;
    }
  }
`;