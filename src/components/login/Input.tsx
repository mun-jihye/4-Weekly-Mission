import React, { ChangeEvent } from 'react';
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

interface InputProps {
  type: string;
  value?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
}

const Input = ({ type, className, placeholder, id }: InputProps) => {
  return (
    <StyledInput
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;

const StyledInput = styled.input`
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

  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 32.5rem;
  }
`;
