import React, { forwardRef } from "react";
import { AnimatedChunkStyled } from "./AnimatedChunk.styled";

type AnimatedChunkType = {
  children: JSX.Element | JSX.Element[]
}

const AnimatedChunk = forwardRef<HTMLDivElement, AnimatedChunkType>(({
  children
}, ref) => {
  return (
    <AnimatedChunkStyled ref={ref}>
      { children }
    </AnimatedChunkStyled>
  )
})

export default AnimatedChunk