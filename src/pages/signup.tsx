import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import InputForm from 'components/login/InputForm';
import { SIGN_UP } from 'utils/constants/form/SIGNUP';
import SocialLoigin from 'components/login/SocialLoigin';

const SignInPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signin');
  };
  const onSubmit = data => {
    console.log('회원가입 정보', data);
  };

  return (
    <>
      <Head> signup | Linkbrary</Head>
      <MainContainer>
        <FlexContainer>
          <Title>
            <Link href="/">
              <Image
                src="/images/linkbraryLogo.png"
                alt="로고이미지"
                width={210}
                height={38}
              />
            </Link>
            <SubTitle>
              <span>이미 회원이신가요?</span>
              <div onClick={handleClick}>로그인 하기</div>
            </SubTitle>
          </Title>
          <InputForm
            onSubmit={onSubmit}
            inputInfo={SIGN_UP}
            defaultValues={{ email: '', password: '', pwConfirm: '' }}
            buttonName="회원가입"
            isSignUp={true}
          />
          <SocialLoigin description="다른 방식으로 가입하기" />
        </FlexContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  padding: 23.8rem 0 25.2rem 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.linkbrary_bg};

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 12rem 3.2rem 23.3rem 3.2rem;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 325px;
    margin: 0 auto;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  span {
    color: ${({ theme }) => theme.black};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
  div {
    color: ${({ theme }) => theme.primary};
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default SignInPage;
