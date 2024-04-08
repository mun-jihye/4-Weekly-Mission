import { CheckEmail, LoginForm, SignUpForm } from 'types/userDataType';
import { setToken } from '../utils/token';
import { fetchRequest } from './index';
import { CHECK_EMAIL_API, SIGNIN_API, SIGNUP_API } from 'utils/config.js';

const loginInquire = async (data: LoginForm) => {
  const res = await fetchRequest({
    url: SIGNIN_API,
    method: 'POST',
    data: data,
  });
  const { accessToken, refreshToken } = res.data;
  setToken({ accessToken, refreshToken });
  return res;
};

const checkEmailDuplicate = async (data: CheckEmail) => {
  const res = await fetchRequest({
    url: CHECK_EMAIL_API,
    method: 'POST',
    data: data,
  });
  return res;
};

const signUpInquire = async (data: SignUpForm) => {
  const res = await fetchRequest({
    url: SIGNUP_API,
    method: 'POST',
    data: data,
  });
  const { accessToken, refreshToken } = res.data;
  setToken({ accessToken, refreshToken });
  return res;
};

export { loginInquire, checkEmailDuplicate, signUpInquire };
