import React, { FC } from "react";
import { ExperiencesListType } from './Experiences.container'
import { ExperiencesStyled } from "./Experiences.styled";
import Experience from "../experience";

type ExperiencesType = {
  list: ExperiencesListType
}

const Experiences: FC<ExperiencesType> = ({ list }) => {
  return (
    <ExperiencesStyled>
      {list.map((item, i) => (
        <Experience
          key={`Experience-${i}`}
          experience={item} />
      ))}
    </ExperiencesStyled>
  )
}

export default Experiences