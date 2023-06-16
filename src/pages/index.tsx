import type { HeadFC, PageProps } from "gatsby"
import React, { FC } from "react"
import ResumePage from "../components/resumePage"
import HeadLayout from "../components/headLayout"
import { GlobalStyle } from "../styles/base"
import SchemaHomepage from "../shema/SchemaHomepage"

const IndexPage: FC<PageProps> = () => (
  <>
    <GlobalStyle />
    <ResumePage />
    <SchemaHomepage />
  </>
)

export default IndexPage

export const Head: HeadFC = () => <HeadLayout />
