import React, { forwardRef } from "react";
import {
  AnimatedSectionStyled,
  HeadingWrapper,
  SectionTitle,
  Underline
} from "./AnimatedSection.styled";

type AnimatedSectionType = {
  sectionTitle: string
  nonBreak: boolean
  children: JSX.Element | JSX.Element[]
}

const AnimatedSection= forwardRef<any, AnimatedSectionType>(({
  sectionTitle,
  nonBreak,
  children
}, {
  headingRef,
  underlineRef
}: any) => (
  <AnimatedSectionStyled nonBreak={nonBreak}>
    <HeadingWrapper>
      <SectionTitle ref={headingRef}>
        { sectionTitle }
      </SectionTitle>
      <Underline ref={underlineRef} />
    </HeadingWrapper>
    { children }
  </AnimatedSectionStyled>
))

export default AnimatedSection