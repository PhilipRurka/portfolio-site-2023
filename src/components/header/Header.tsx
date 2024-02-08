import React, { FC } from "react";
import {
  ContactItem,
  ContactList,
  Email,
  Github,
  HeaderStyled,
  HeaderWrapper,
  LinkedIn,
  Name,
  PrintIcon,
  PrintIconWrapper,
  Title
} from "./Header.styled";
import AnimatedChunkContainer from "../animatedChunk";

type HeaderType = {
  handlePrint: () => void 
}

const Header: FC<HeaderType> = ({ handlePrint }) => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <AnimatedChunkContainer
          type={{
            delay: 0,
            timing: 'sametime',
            duration: 0.75,
            style: 'fade'
          }} >
          <Name>Philip Rurka</Name>
          <Title>Senior Frontend Developer</Title>
        </AnimatedChunkContainer>
        <AnimatedChunkContainer
          type={{
            timing: 'sametime',
            duration: 0.75,
            style: 'from-left',
            ease: 'elastic.inOut'
          }} >
          <PrintIconWrapper onClick={handlePrint}>
            <PrintIcon color='#fff' />
          </PrintIconWrapper>
        </AnimatedChunkContainer>
        <AnimatedChunkContainer
          type={{
            timing: 'waterfall',
            duration: 0.75,
            style: 'fade'
          }} >
          <ContactList>
            <ContactItem>
              <Email href='mailto:hey@philiprurka.com'>
                hey@philiprurka.com
              </Email>
            </ContactItem>
            <ContactItem>
              <LinkedIn href='tel:+1 (438) 4588649'>
                +1 (438) 458-8649
              </LinkedIn>
            </ContactItem>
            <ContactItem>
              <LinkedIn href='https://www.linkedin.com/in/philiprurka'>
                linkedin.com/in/philiprurka
              </LinkedIn>
            </ContactItem>
            <ContactItem>
              <Github href='https://github.com/PhilipRurka'>
                github.com/PhilipRurka
              </Github>
            </ContactItem>
          </ContactList>
        </AnimatedChunkContainer>
      </HeaderWrapper>
    </HeaderStyled>
  )
}

export default Header