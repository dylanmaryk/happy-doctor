import React from 'react';
import Styled from 'styled-components';

const LogoWrapper= Styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 0;
  justify-content: center;
  width: 100%;
  padding: 15px;

  img {
    max-height: 40px;
    width: auto;
  }
`;

const Logo = () => (
  <LogoWrapper>
    <img alt="logo" src="/img/logo.png" />
  </LogoWrapper>
);

export default Logo;
