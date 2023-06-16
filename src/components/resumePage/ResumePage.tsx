import React, { FC } from "react";
import {
  LeftColumn,
  Main,
  ResumePageStyled,
  ResumeWrapper,
  RightColumn
} from "./ResumePage.styled";
import HeaderContainer from "../header";
import AnimatedSection from "../animatedSection";
import AboutMe from "../aboutMe";
import Experiences from "../experiences";
import Education from "../education";
import Skills from "../skills";

type ResumePageType = {
  
}

const ResumePage: FC<ResumePageType> = () => {
  return (
    <ResumePageStyled>
      <ResumeWrapper>
        <HeaderContainer />
        <Main>
          <LeftColumn>
            <AnimatedSection sectionTitle='About Me'>
              <AboutMe />
            </AnimatedSection>
            <AnimatedSection sectionTitle='Education'>
              <Education />
            </AnimatedSection>
            <AnimatedSection
              sectionTitle='Skills'
              nonBreak >
              <Skills />
            </AnimatedSection>
          </LeftColumn>
          <RightColumn>
            <AnimatedSection sectionTitle='Experiences'>
              <Experiences />
            </AnimatedSection>
          </RightColumn>
        </Main>
      </ResumeWrapper>
    </ResumePageStyled>
  )
}

export default ResumePage