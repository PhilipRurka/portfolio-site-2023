import React, { FC } from "react";
import {
  Description,
  EducationStyled,
  EducationType,
  Mean,
  MeansItem,
  MeansList
} from "./Education.styled";
import { meansList } from "./Education.container";

type EducationType = {
  
}

const Education: FC<EducationType> = () => {
  return (
    <EducationStyled>
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
    </EducationStyled>
  )
}

export default Education