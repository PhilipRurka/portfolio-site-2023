import React, { FC, useEffect, useRef } from "react"
import AnimatedChunk from "./AnimatedChunk"
import { gsap } from "gsap"

type AnimatedChunkContainerType = {
  children: JSX.Element | JSX.Element[]
  type: {
    delay?: number
    direction: 'waterfall' | 'sametime'
    duration?: number
    style: 'from-left' | 'fade'
  }
}

const AnimatedChunkContainer: FC<AnimatedChunkContainerType> = ({
  children,
  type: {
    delay: pDelay,
    direction,
    duration,
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

    let parent = parentRef.current.children

    if(parent[0].localName === 'ul') {
      parent = parent[0].children
    }

    for (let i = 0; i < parent.length; i++) {
      const chunk = parent[i];

      let delay: number = typeof pDelay === "undefined" ? 0.25 : 0 

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
        duration: duration || 1.25,
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