import React, { ChangeEvent, useState } from 'react';
import Label from './Label';
import Input from './Input';
import styled from 'styled-components';

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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  isEyeIcon?: boolean;
}
const InputGroup = ({
  id = '',
  type,
  placeholder,
  label,
  isEyeIcon = false,
}: InputGroupProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div style={{ position: 'relative' }}>
        <Input id={id} type={type} placeholder={placeholder} />
        {isEyeIcon && (
          <IconContainer onClick={handleClick}>
            <img
              id="pw-eyeIcon"
              src={`/images/icons/${showPassword ? 'eye-on' : 'eye-off'}.svg`}
              alt={
                showPassword ? '비밀번호 숨기기 아이콘' : '비밀번호 보기 아이콘'
              }
            />
          </IconContainer>
        )}
      </div>
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
  gap: 1.2rem;

  @media (min-width: 375px) and (max-width: 767px) {
    gap: 1.2rem;
  }
`;
const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  left: 36.4rem;
  width: 1.6rem;
  height: 1.6rem;
`;
export default InputGroup;
