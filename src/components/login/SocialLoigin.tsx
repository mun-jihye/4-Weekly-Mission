import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
interface SocialLoginProps {
  description: string;
}
const SocialLoigin = ({ description }: SocialLoginProps) => {
  return (
    <Social>
      <span>{description}</span>
      <IconContainer>
        <Link href="https://google.com">
          <Image
            src="/images/icons/sign/google.png"
            width={42}
            height={42}
            alt="구글 소셜 로그인"
          />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Image
            src="/images/icons/sign/kakaotalk.svg"
            width={42}
            height={42}
            alt="카카오 소셜 로그인"
          />
        </Link>
      </IconContainer>
    </Social>
  );
};
const Social = styled.div`
  display: flex;
  width: 40rem;
  padding: 1.2rem 2.4rem;
  margin-top: 0.2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.gray20};
  background: ${({ theme }) => theme.gray10};

  span {
    color: ${({ theme }) => theme.gray100};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;
export default SocialLoigin;
