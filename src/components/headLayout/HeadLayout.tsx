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

      {/**
       * Short description of the document (limit to 150 characters)
       * This content *may* be used as a part of search engine results.
       */}
      <meta name="description" content="Philip Rurka's Portfolio" />

      {/** Gives a general age rating based on the document's content */}
      <meta name="rating" content="General" />

      {/**  Provides information about an author or another person */}
      <link rel="me" href="mailto:hey@philiprurka.com" />
      <link rel="me" href="sms:+14384588649" />


      {/** Icon in the highest resolution we need it for */}
      <link rel="icon" sizes="192x192" href="/static/assets/favicon.ico" />

      {/** Facebook */}
      <meta property="og:url" content="philiprurka.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Philip Rurka's Resume" />
      <meta property="og:image" content="/static/assets/working-on-laptop.jpg" />
      <meta property="og:image:alt" content="Philip Rurka working on a laptop" />
      <meta property="og:description" content="I'm a bilingual frontend developer who is working on his full stack citizenship. I love attending tech meetups and working alongside other highly motivated developers." />
      <meta property="og:site_name" content="Philip Rurka's Resume" />
      <meta property="og:locale" content="en_US" />

      {/** Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Philip Rurka's Resume" />
      <meta name="twitter:description" content="Content description less than 200 charactersI'm a bilingual frontend developer who is working on his full stack citizenship. I love attending tech meetups and working alongside other highly motivated developers." />
      <meta name="twitter:image" content="/static/assets/working-on-laptop.jpg" />
      <meta name="twitter:image:alt" content="Philip Rurka working on a laptop"></meta>
    </>
  )
}

export default Head