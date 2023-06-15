import React, { FC } from "react"
import AnimatedSection from "./AnimatedSection"

type AnimatedSectionContainerType = {
  sectionTitle: string
  children: JSX.Element | JSX.Element[]
}

const AnimatedSectionContainer: FC<AnimatedSectionContainerType> = ({ ...rest }) => {
  return (
    <AnimatedSection { ...rest } />
  )
}

export default AnimatedSectionContainer