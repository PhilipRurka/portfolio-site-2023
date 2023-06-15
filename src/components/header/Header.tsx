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
  Title
} from "./Header.styled";

type HeaderType = {
  
}

const Header: FC<HeaderType> = () => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Name>Philip Rurka</Name>
        <Title>Frontend Developer</Title>
        <ContactList>
          <ContactItem>
            <Email href='mailto:hey@philiprurka.com'>
              hey@philiprurka.com
            </Email>
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
      </HeaderWrapper>
    </HeaderStyled>
  )
}

export default Header