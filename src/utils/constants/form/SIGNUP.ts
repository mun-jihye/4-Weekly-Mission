import { InputInfo } from 'types/inputInterface';
import { ERROR_MESSAGES, PLACEHOLDER, REGEX } from '../VALIDATION';

export const SIGN_UP: InputInfo[] = [
  {
    id: 'email',
    type: 'text',
    label: '이메일',
    placeholder: PLACEHOLDER.email,
    validation: {
      required: ERROR_MESSAGES.email_empty,
      pattern: {
        value: REGEX.email,
        message: ERROR_MESSAGES.email_invalid,
      },
    },
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: PLACEHOLDER.password,
    validation: {
      required: ERROR_MESSAGES.password_empty,
      pattern: {
        value: REGEX.pw,
        message: ERROR_MESSAGES.password_invalid,
      },
      minLength: { value: 8, message: '비밀번호는 8글자 이상입니다' },
      maxLength: { value: 20, message: '비밀번호는 20글자 이내입니다' },
    },
  },
];
