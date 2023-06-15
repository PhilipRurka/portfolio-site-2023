import React, { FC } from "react";
import {
  Description,
  EducationStyled,
  EducationType
} from "./Education.styled";

type EducationType = {
  
}

const Education: FC<EducationType> = () => {
  return (
    <EducationStyled>
      <EducationType>Self Taught!!</EducationType>
      <Description>
        Although I don't have any academic credential, I can assure you, I can get the job done! My methods of learning are typacilly reading documentation, reverse engeneering, Reading other developers work and most of all, getting my hands dirty in a good old fashion project.
      </Description>
    </EducationStyled>
  )
}

export default Education