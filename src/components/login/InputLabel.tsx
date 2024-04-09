import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { InputInfo } from 'types/inputInterface';
import Image from 'next/image';

interface InputProps extends InputInfo {
  className?: string;
}

const InputLabel = ({
  label,
  type,
  className,
  placeholder,
  id,
  errmsg,
  validation,
}: InputProps) => {
  const { register } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === 'password';

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <InputContainer>
        <StyledInput
          id={id}
          className={className}
          type={isPasswordType && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          errmsg={errmsg}
          {...register(id, validation)}
        />
        {isPasswordType && (
          <IconContainer onClick={handleClick}>
            <Image
              id="pw-eyeIcon"
              src={`/images/icons/sign/${
                showPassword ? 'eye-on' : 'eye-off'
              }.svg`}
              alt={
                showPassword ? '비밀번호 숨기기 아이콘' : '비밀번호 보기 아이콘'
              }
              width={16}
              height={16}
            />
          </IconContainer>
        )}
      </InputContainer>
      <ErrorMessage>{errmsg}</ErrorMessage>
    </Container>
  );
};

export default InputLabel;

interface StyledInputProps {
  errmsg?: string;
}
const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;
const StyledLabel = styled.label`
  color: ${({ theme }) => theme.black};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;
const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  left: 36.4rem;
  width: 1.6rem;
  height: 1.6rem;
  @media (min-width: 375px) and (max-width: 767px) {
    left: 29.4rem;
  }
`;
const InputContainer = styled.div`
  position: relative;
`;
const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  width: 40rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.gray20};
  background: ${({ theme }) => theme.white};

  &:focus {
    outline: none;
    border: 0.1rem solid ${({ theme }) => theme.primary};
  }
  ${props =>
    props.errmsg &&
    `
    border-color: red;
  `}

  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 32.5rem;
  }
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 1.4rem;
  font-weight: 400;
`;
