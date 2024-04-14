import { NextRouter } from 'next/router';
import { GET_USER } from './config';
import { fetchRequest } from 'lib';

export const authCheck = async (router: NextRouter) => {
  const TOKEN = localStorage.getItem('accessToken');
  if (!TOKEN) {
    router.push('/signin');
  }
  const res = await fetchRequest({
    url: GET_USER,
    method: 'POST',
    data: TOKEN,
  });
  return res;
};
