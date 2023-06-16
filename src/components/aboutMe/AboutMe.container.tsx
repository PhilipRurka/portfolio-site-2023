import React, { FC } from "react"
import AboutMe from "./AboutMe"

type AboutMeDataType = Array<{
  title: string
  description: string
}>

export const aboutMeData: AboutMeDataType = [{
  title: 'Who Am I',
  description: 'I\'m a bilingual frontend developer who is working on his full stack citizenship. I love attending tech meetups and working alongside other highly motivated developers. I have a passion for clean, performant and a11y code. A healthy culture and a team that works well together is very important to me.'
}, {
  title: 'From Carpenter to Developer',
  description: 'During the winter of 2015, I decided to stop my career as a carpenter and pursue the life of a developer. I began by taking courses on Team Treehouse, then moved onto creating projects with what I had learned. 10 months later, I got a mentorship with SimpTek. A month after my mentorship, they wanted to officially hire me full time, at which point I kept working hard to climb up the ladder of responsibilities. To this day, I continue to learn new technologies, work on side projects and go to code meetups.',
}]

const AboutMeContainer: FC = () => {

  return (
    <AboutMe />
  )
}

export default AboutMeContainer