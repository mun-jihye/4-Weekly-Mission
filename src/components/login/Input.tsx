import React, { ChangeEvent, KeyboardEvent } from 'react';
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
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({ type, className, placeholder, id }) => {
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

const StyledInput = styled.input``;
