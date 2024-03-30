import React, { ReactNode } from 'react';
import styled from 'styled-components';

/**
 * @param {object} props
 * @param {node} children
 * @param {string} htmlFor
 */

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
}

const Label = ({ children, htmlFor }: LabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.black};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;
