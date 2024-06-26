import React from 'react';
import Logo from '../Logo';
import styled from 'styled-components';
import Profile from './Profile';
import { UserData } from 'types/userDataType';

const NavBar = ({ profileData }: UserData) => {
  return (
    <Nav>
      <FlextContainer>
        <Logo />
        <Profile profileData={profileData} />
      </FlextContainer>
    </Nav>
  );
};
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;
const FlextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: 1200px) {
    height: 9.4rem;
    max-width: 192rem;
    padding: 0 20rem;
  }
`;
export default NavBar;
