import React, { useState } from 'react';
import Label from './Label';
import Input from './Input';
import styled from 'styled-components';
import Image from 'next/image';

/**
 * @param {object} props
 * @param {string} id
 * @param {string} type
 * @param { func } onChange
 * @param { func } onKeyDown
 * @param { string } value
 * @param { string } className
 * @param {string} placeholder
 * @param {string} label
 * @param {boolean} valid
 */
interface InputGroupProps {
  id?: string;
  type: string;
  onChange?: () => void;
  placeholder?: string;
  label: string;
  isEyeIcon?: boolean;
  errmsg: string;
  handleBlur: () => void;
}
const InputGroup = ({
  id = '',
  type,
  placeholder,
  label,
  isEyeIcon = false,
  errmsg,
  handleBlur,
}: InputGroupProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div style={{ position: 'relative' }}>
        <Input
          id={id}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          errmsg={errmsg}
          handleBlur={handleBlur}
        />
        {isEyeIcon && (
          <IconContainer onClick={handleClick}>
            <Image
              id="pw-eyeIcon"
              src={`/images/icons/${showPassword ? 'eye-on' : 'eye-off'}.svg`}
              alt={
                showPassword ? '비밀번호 숨기기 아이콘' : '비밀번호 보기 아이콘'
              }
              width={16}
              height={16}
            />
          </IconContainer>
        )}
      </div>
      <ErrorMessage>{errmsg}</ErrorMessage>
    </Container>
  );
};
const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
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
const ErrorMessage = styled.div`
  color: red;
  font-size: 1.4rem;
  font-weight: 400;
`;
export default InputGroup;
