import React, { FC } from "react";
import {
  AnimatedSectionStyled,
  SectionTitle
} from "./AnimatedSection.styled";

type AnimatedSectionType = {
  sectionTitle: string
  children: JSX.Element | JSX.Element[]
}

const AnimatedSection: FC<AnimatedSectionType> = ({
  sectionTitle,
  children
}) => (
  <AnimatedSectionStyled>
    <SectionTitle>{ sectionTitle }</SectionTitle>
    { children }
  </AnimatedSectionStyled>
)

export default AnimatedSection