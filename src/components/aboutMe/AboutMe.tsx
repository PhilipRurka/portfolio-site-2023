import React, { FC, Fragment } from "react";
import {
  AboutMeDescription,
  AboutMeHeading,
  AboutMeStyled
} from "./AboutMe.styled";
import { aboutMeData } from "./AboutMe.container";

type AboutMeType = {
  
}

const AboutMe: FC<AboutMeType> = () => (
  <AboutMeStyled>
    {aboutMeData.map((item) => (
      <Fragment key={`AboutMe-${item.title}`}>
        <AboutMeHeading>{ item.title }</AboutMeHeading>
        <AboutMeDescription>{ item.description }</AboutMeDescription>
      </Fragment>
    ))}
  </AboutMeStyled>
)

export default AboutMe