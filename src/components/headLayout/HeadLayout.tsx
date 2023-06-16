import React, { FC } from "react";

type HeadType = {
  
}

const Head: FC<HeadType> = () => {
  return (
    <>
      {/**
       * The following 2 meta tags *must* come first in the <head>
       * to consistently ensure proper document rendering.
       * Any other head element should come *after* these tags.
       */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />


      <title>Philip rurka's Resume</title>
    </>
  )
}

export default Head