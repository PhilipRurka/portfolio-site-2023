import React, { FC, useEffect, useRef } from "react"
import AnimatedChunk from "./AnimatedChunk"
import { gsap } from "gsap"

type AnimatedChunkContainerType = {
  children: JSX.Element | JSX.Element[]
  type: {
    direction: 'waterfall' | 'sametime'
    style: 'from-left' | 'fade'
  }
}

const AnimatedChunkContainer: FC<AnimatedChunkContainerType> = ({
  children,
  type: {
    direction,
    style
  }
}) => {
  const parentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(!parentRef.current) return
    let initialX: number = 0
    let ease: string = 'power0'

    if(style === "from-left") {
      initialX = -150
      ease = 'power2'
    }

    for (let i = 0; i < parentRef.current.children.length; i++) {
      const chunk = parentRef.current.children[i];
      let delay: number = 0.25

      if(direction === 'waterfall') {
        delay = i * 0.25
      }

      gsap.fromTo(chunk, {
        x: initialX,
      }, {
        scrollTrigger: {
          trigger: parentRef.current,
          toggleActions: 'play none none reverse',
          start: '10px bottom-=50px',
        },
        alpha: 1,
        duration: 1.25,
        delay,
        x: 0,
        ease
      })
    }
  }, [])

  return (
    <AnimatedChunk ref={parentRef}>
      { children }
    </AnimatedChunk>
  )
}

export default AnimatedChunkContainer