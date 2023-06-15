import React, { FC, RefObject, useCallback, useEffect, useMemo, useRef } from "react"
import AnimatedSection from "./AnimatedSection"
import { gsap } from "gsap"

type AnimatedSectionContainerType = {
  sectionTitle: string
  children: JSX.Element | JSX.Element[]
}

const AnimatedSectionContainer: FC<AnimatedSectionContainerType> = ({ ...rest }) => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        toggleActions: 'play none none none',
        start: 'center 90%',
        end: 'center 90%',
        markers: true,
      },
      alpha: 1,
      duration: 1,
      ease: 'power1'
    })
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