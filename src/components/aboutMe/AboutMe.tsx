import React, { FC, Fragment, forwardRef } from "react";
import {
  AboutMeDescription,
  AboutMeHeading,
  AboutMeStyled,
  AboutMeWrapper
} from "./AboutMe.styled";
import { aboutMeData } from "./AboutMe.container";

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => (
  <AboutMeStyled ref={ref}>
    {aboutMeData.map((item) => (
      <AboutMeWrapper key={`AboutMe-${item.title}`}>
        <AboutMeHeading>{ item.title }</AboutMeHeading>
        <AboutMeDescription>{ item.description }</AboutMeDescription>
      </AboutMeWrapper>
    ))}
  </AboutMeStyled>
))

export default AboutMe