import InputGroup from 'components/login/InputGroup';
import React, { FocusEvent } from 'react';
import { ERROR_MESSAGES, PLACEHOLDER, REGEX } from 'utils/constants/VALIDATION';
import { useForm } from 'react-hook-form';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleClick = () => {
    router.push('/signup');
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const onSubmitForm = data => {
    // if (!Object.keys(errors).length) {
    // await new Promise(r => setTimeout(r, 1000));
    // alert(JSON.stringify(data));
    // }
    console.log('회원가입 정보', data);
  };

  return (
    <>
      <Head> signin | Linkbrary</Head>
      <MainContainer>
        <FlexContainer>
          <Title>
            <a href="/">
              <Logo src="/images/linkbraryLogo.png" alt="로고이미지" />
            </a>
            <SubTitle>
              <span>회원이 아니신가요?</span>
              <div onClick={handleClick}>회원 가입하기</div>
            </SubTitle>
          </Title>
          <StyledForm onSubmit={handleSubmit(onSubmitForm)}>
            <InputGroup
              id="email"
              label="email"
              type="text"
              placeholder={PLACEHOLDER.email}
              handleBlur={handleBlur}
              {...register('email', {
                required: ERROR_MESSAGES.email_empty,
                pattern: {
                  value: REGEX.email,
                  message: ERROR_MESSAGES.email_invalid,
                },
              })}
              aria-invalid={errors.email ? true : false}
              errmsg={
                String(errors.email?.message) === 'undefined'
                  ? null
                  : String(errors.email?.message)
              }
            />
            <InputGroup
              id="password"
              label="password"
              type="password"
              isEyeIcon={true}
              placeholder={PLACEHOLDER.password}
              handleBlur={handleBlur}
              {...register('password', {
                required: ERROR_MESSAGES.password_empty,
                pattern: {
                  value: REGEX.pw,
                  message: ERROR_MESSAGES.password_invalid,
                },
              })}
              aria-invalid={errors.password ? true : false}
              errmsg={
                String(errors.password?.message) === 'undefined'
                  ? null
                  : String(errors.password?.message)
              }
            />
            <Button type="submit" disabled={isSubmitting} className="login">
              로그인
            </Button>
          </StyledForm>
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
  background-color: var(--Linkbrary-bg, #f0f6ff);

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
const Logo = styled.img`
  height: 3.8rem;
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
const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export default SignInPage;
