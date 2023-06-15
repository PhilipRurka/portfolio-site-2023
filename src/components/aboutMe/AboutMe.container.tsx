import React, { FC } from "react"
import AboutMe from "./AboutMe"

type AboutMeDataType = Array<{
  title: string
  description: string
}>

export const aboutMeData: AboutMeDataType = [{
  title: 'Who am I',
  description: 'Easy, Im a bilingual Frontend Developer who is working on his full stack citizenship. I love attending tech meetups, working along side other highly motivated developers. I have a passion for clean, performant and a11y code.'
}, {
  title: 'From Carpenter to Developer',
  description: 'One winter, I decided to stop my career as a Charpenter and persue the life of a developer. I began by taking courses on Team Treehouse, then moved onto creating projects and sites with what I was learning. 10 months later, I got a mentorship with SimpTek. A month after my mentorship, they wanted to officialy hire me fulltime, at which point I kept working hard to climb up the ladder of responsibilities. I continue to this day, learn new technologies, work on side projects and go to code meetups.',
}]

const AboutMeContainer: FC = () => {
  return (
    <AboutMe />
  )
}

export default AboutMeContainer