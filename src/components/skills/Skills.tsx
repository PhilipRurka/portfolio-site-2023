import React, { FC } from "react";
import {
  Skill,
  SkillItem,
  SkillType,
  SkillsList,
  SkillsStyled,
  SkillsWrapper
} from "./Skills.styled";
import { skillsData } from "./Skills.container";
import AnimatedChunkContainer from "../animatedChunk";

type SkillsType = {
  
}

const Skills: FC<SkillsType> = () => (
  <SkillsStyled>
    <AnimatedChunkContainer
      type={{
        timing: 'waterfall',
        style: 'from-left'
      }} >
      {skillsData.map(item => (
        <SkillsWrapper key={`Skills-wrapper${item.skillType}`}>
          <SkillType>{ item.skillType }</SkillType>
          <SkillsList>
            {item.skills.map(skill => (
              <SkillItem key={`SkillItem-${skill}`}>
                <Skill>{ skill }</Skill>
              </SkillItem>
            ))}
          </SkillsList>
        </SkillsWrapper>
      ))}
    </AnimatedChunkContainer>
  </SkillsStyled>
)

export default Skills