import { InputInfo } from 'types/inputInterface';
import { ERROR_MESSAGES, PLACEHOLDER, REGEX } from './VALIDATION';
import { checkEmailDuplicate } from 'lib/authAPI';
import { CheckEmail } from 'types/userDataType';

export const SIGN: InputInfo[] = [
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
    validate: async (value: CheckEmail) => {
      console.log(value);
      try {
        const isDuplicate = await checkEmailDuplicate(value);
        if (isDuplicate) {
          return ERROR_MESSAGES.email_duplicate;
        }
        return true;
      } catch (error) {
        console.error('Error validating email:', error);
        return '이메일 유효성 검사 중 오류가 발생했습니다.';
      }
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
