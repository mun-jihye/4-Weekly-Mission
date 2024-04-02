import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Link href="/">
      <Img src="/images/linkbraryLogo.png" alt="logo" width={130} height={16} />
    </Link>
  );
};

const Img = styled(Image)`
  width: auto;
  height: auto;
  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;
export default Logo;
