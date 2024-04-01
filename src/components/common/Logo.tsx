import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Link href="/">
      <Img src="/images/linkbraryLogo.png" alt="logo" />
    </Link>
  );
};

const Img = styled.img`
  height: 1.6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;

export default Logo;
