import React, { FC } from "react";
import { ExperiencesListType } from './Experiences.container'
import { ExperiencesStyled } from "./Experiences.styled";
import Experience from "../experience";
import AnimatedChunkContainer from "../animatedChunk/AnimatedChunk.container";

type ExperiencesType = {
  list: ExperiencesListType
}

const Experiences: FC<ExperiencesType> = ({ list }) => {
  return (
    <ExperiencesStyled>
      <AnimatedChunkContainer
        type={{
          direction: 'waterfall',
          style: 'fade'
        }} >
        {list.map((item, i) => (
          <Experience
            key={`Experience-${i}`}
            experience={item} />
            ))}
        </AnimatedChunkContainer>
    </ExperiencesStyled>
  )
}

export default Experiences