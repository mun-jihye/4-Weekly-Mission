import { InputHTMLAttributes } from 'react';

export interface ValidationRule {
  required: string;
  pattern: {
    value: RegExp;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
}
export interface InputInfo extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  validation?: ValidationRule;
  errmsg?: string;
}
