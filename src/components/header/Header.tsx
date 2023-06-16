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
        <PrintIconWrapper onClick={handlePrint}>
          <PrintIcon color='#fff' />
        </PrintIconWrapper>
        <AnimatedChunkContainer
          type={{
            delay: 0,
            direction: 'sametime',
            duration: 0.75,
            style: 'fade'
          }} >
          <Name>Philip Rurka</Name>
          <Title>Frontend Developer</Title>
        </AnimatedChunkContainer>
        <AnimatedChunkContainer
          type={{
            direction: 'waterfall',
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