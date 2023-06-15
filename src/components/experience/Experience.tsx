import React, { FC } from "react";
import {
  CompanyLocation,
  CompanyName,
  Description,
  ExperienceStyled,
  JobTitle,
  MinorDetails,
  OfficeType,
  Responsibilities,
  Responsibility,
  ResponsibilityItem,
  TimeLine
} from "./Experience.styled";
import { ExperiencesListType } from "../experiences/Experiences.container";
import { ArrayElement } from "../../general-types";

type ExperienceType = {
  experience: ArrayElement<ExperiencesListType>
}

const Experience: FC<ExperienceType> = ({
  experience: {
    companyDescription,
    companyLocation,
    companyName,
    jobTitle,
    officeType,
    responsibilities,
    timeLine
  } 
}) => {
  return (
    <ExperienceStyled>
      <JobTitle>{ jobTitle }</JobTitle>
      <CompanyName>{ companyName }</CompanyName>
      <MinorDetails>
        <TimeLine>{ timeLine }</TimeLine>
        <OfficeType>{ officeType }</OfficeType>
        <CompanyLocation>{ companyLocation }</CompanyLocation>
      </MinorDetails>
      <Description>{ companyDescription }</Description>
      <Responsibilities>
        {responsibilities.map((responsibility, i) => (
          <ResponsibilityItem key={`responsibility-${i}`}>
            <Responsibility>{ responsibility }</Responsibility>
          </ResponsibilityItem>
        ))}
      </Responsibilities>
    </ExperienceStyled>
  )
}

export default Experience