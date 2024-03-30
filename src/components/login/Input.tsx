import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

/**
 * @param {object} props
 * @param {string} type
 * @param {string} value
 * @param { string } className
 * @param { func } onChange
 * @param { func } onKeyDown
 * @param { string } placeholder
 * @param {string} id
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
  errmsg: string;
}

const Input = ({ type, className, placeholder, id, errmsg }: InputProps) => {
  return (
    <StyledInput
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      errmsg={errmsg}
    />
  );
};

export default Input;

interface StyledInputProps {
  errmsg?: string;
}
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
