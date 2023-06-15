import type { HeadFC, PageProps } from "gatsby"
import React, { FC } from "react"
import ResumePage from "../components/resumePage"
import HeadLayout from "../components/headLayout"
import { GlobalStyle } from "../styles/base"

const IndexPage: FC<PageProps> = () => (
  <>
    <GlobalStyle />
    <ResumePage />
  </>
)

export default IndexPage

export const Head: HeadFC = () => <HeadLayout />
