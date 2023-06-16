import React, { FC } from "react";
import {
  Content,
  Description,
  EducationStyled,
  EducationType,
  Mean,
  MeansItem,
  MeansList
} from "./Education.styled";
import { meansList } from "./Education.container";
import AnimatedChunkContainer from "../animatedChunk";

type EducationType = {
  
}

const Education: FC<EducationType> = () => {
  return (
    <EducationStyled>
      <AnimatedChunkContainer
        type={{
          direction: 'waterfall',
          style: 'from-left'
        }} >
        <Content>
          <EducationType>Self Taught</EducationType>
          <Description>
            I am a self taught developer who mostly learned by:        
          </Description>
          <MeansList>
            {meansList.map((item) => (
              <MeansItem key={`MeansList-${item}`}>
                <Mean>{ item }</Mean>
              </MeansItem>
            ))}
          </MeansList>
        </Content>
      </AnimatedChunkContainer>
    </EducationStyled>
  )
}

export default Education