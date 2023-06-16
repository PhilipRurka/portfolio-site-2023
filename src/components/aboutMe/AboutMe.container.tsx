import React, { FC, useEffect, useRef } from "react"
import AboutMe from "./AboutMe"
import { gsap } from "gsap"

type AboutMeDataType = Array<{
  title: string
  description: string
}>

export const aboutMeData: AboutMeDataType = [{
  title: 'Who am I',
  description: 'I\'m a bilingual Frontend Developer who is working on his full stack citizenship. I love attending tech meetups and working alongside other highly motivated developers. I have a passion for clean, performant and a11y code. A healthy culture and a team that works well together is very important to me.'
}, {
  title: 'From Carpenter to Developer',
  description: 'One winter, I decided to stop my career as a Carpenter and pursue the life of a developer. I began by taking courses on Team Treehouse, then moved onto creating projects with what I had learned. 10 months later, I got a mentorship with SimpTek. A month after my mentorship, they wanted to officially hire me full time, at which point I kept working hard to climb up the ladder of responsibilities. To this day, I continue to learn new technologies, work on side projects and go to code meetups.',
}]

const AboutMeContainer: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(!wrapperRef.current) return
    for (let i = 0; i < wrapperRef.current.children.length; i++) {
      const chunk = wrapperRef.current.children[i];
      console.log(chunk)

      gsap.fromTo(chunk, {
        x: -150
      }, {
        scrollTrigger: {
          trigger: chunk,
          toggleActions: 'play none none none',
          start: 'center 90%',
          end: 'center 90%',
          markers: true,
        },
        alpha: 1,
        duration: 1.5,
        delay: 0.25 * i,
        x: 0,
        ease: 'power1'
      })
    }
  }, [])

  return (
    <AboutMe ref={wrapperRef} />
  )
}

export default AboutMeContainer