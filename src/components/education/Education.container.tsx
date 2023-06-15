import React, { FC } from "react"
import Education from "./Education"

export const meansList = [
  'Collaborating on projects',
  'Reading documentation',
  'Taking online courses',
  'Reverse engineering',
  'Reading other developers blocks',
  'Listening to Frontend podcasts',
  'Reviewing the work of my peers',
  'Through my work',
  'Attending meetups'
] as const

const EducationContainer: FC = () => {
  return (
    <Education />
  )
}

export default EducationContainer