import React, { FC, RefObject, useCallback, useEffect, useMemo, useRef } from "react"
import AnimatedSection from "./AnimatedSection"
import { gsap } from "gsap"

type AnimatedSectionContainerType = {
  sectionTitle: string
  nonBreak?: boolean
  children: JSX.Element | JSX.Element[]
}

const AnimatedSectionContainer: FC<AnimatedSectionContainerType> = ({ ...rest }) => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        toggleActions: 'play none none reverse',
        start: 'center bottom-=50px',
      }
    })

    tl.to(headingRef.current, {
      alpha: 1,
      duration: 0.75,
      ease: 'power1'
    })
    .to(underlineRef.current, {
      width: "100%",
      duration: 0.75,
      ease: 'power1'
    }, '<0.5')
  }, [])

  return (
    <AnimatedSection
      { ...rest }
      ref={{
        headingRef,
        underlineRef
      } as any} />
  )
}

export default AnimatedSectionContainer