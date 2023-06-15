import styled, { css } from 'styled-components';
import { Colors } from '../../styles/color';

const sharedMinor = css`
  font-size: 12px;
  margin-left: 30px;

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 600px) {
    margin-left: unset;
    margin-top: 4px;

    &:first-child {
    margin-top: 0;
  }
  }
`

export const ExperienceStyled = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px dashed black;

  &:last-child {
    padding-bottom: unset;
    margin-bottom: unset;
    border-bottom: unset;
  }

  @media print {
    break-inside: avoid; 
  }
`;

export const JobTitle = styled.h3`
  font-size: 20px;
  color: ${Colors.eucalyptus};
`;

export const CompanyName = styled.span`
  font-weight: 800;
  margin: 10px 0;
`;

export const MinorDetails = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TimeLine = styled.span`
  ${sharedMinor}
`;

export const OfficeType = styled.span`
  ${sharedMinor}
`;

export const CompanyLocation = styled.span`
  ${sharedMinor}
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.2em;
  margin: 10px 0;
`;

export const Responsibilities = styled.ul`
  padding-left: 30px;
`;

export const ResponsibilityItem = styled.li`
  list-style: disc;
`;

export const Responsibility = styled.p`
  font-size: 14px;
  line-height: 1.2em;
`;