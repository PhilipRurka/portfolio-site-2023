import styled from 'styled-components';

export const AnimatedChunkStyled = styled.div`
  & > *:not(ul),
  & > ul > li {
    opacity: 0;
  }
`;