import React, { forwardRef } from "react";
import {
  AnimatedSectionStyled,
  HeadingWrapper,
  SectionTitle,
  Underline
} from "./AnimatedSection.styled";

type AnimatedSectionType = {
  sectionTitle: string
  children: JSX.Element | JSX.Element[]
}

const AnimatedSection= forwardRef<any, AnimatedSectionType>(({
  sectionTitle,
  children
}, {
  headingRef,
  underlineRef
}: any) => (
  <AnimatedSectionStyled>
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