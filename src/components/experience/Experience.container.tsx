import React, { FC } from "react"
import Experience from "./Experience"
import { ExperiencesListType } from "../experiences/Experiences.container"
import { ArrayElement } from "../../general-types"

type ExperienceContainertype = {
  experience: ArrayElement<ExperiencesListType>
}

const ExperienceContainer: FC<ExperienceContainertype> = ({ ...rest }) => {
  return (
    <Experience { ...rest } />
  )
}

export default ExperienceContainer