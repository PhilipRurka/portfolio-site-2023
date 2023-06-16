import React from "react";
import {
  AboutMeDescription,
  AboutMeHeading,
  AboutMeStyled,
  AboutMeWrapper
} from "./AboutMe.styled";
import { aboutMeData } from "./AboutMe.container";
import AnimatedChunkContainer from "../animatedChunk";

const AboutMe = () => (
  <AboutMeStyled>
    <AnimatedChunkContainer
      type={{
        direction: 'waterfall',
        style: 'from-left'
      }} >
      {aboutMeData.map((item) => (
        <AboutMeWrapper key={`AboutMe-${item.title}`}>
          <AboutMeHeading>{ item.title }</AboutMeHeading>
          <AboutMeDescription>{ item.description }</AboutMeDescription>
        </AboutMeWrapper>
      ))}
    </AnimatedChunkContainer>
  </AboutMeStyled>
)

export default AboutMe