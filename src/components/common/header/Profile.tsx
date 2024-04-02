import { useUserQuery } from 'hooks/useFetchData';
import Button from '../Button';
import React from 'react';
import styled from 'styled-components';
import Loader from '../Loader';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Profile = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signin');
  };

  const { data: profileData, isLoading } = useUserQuery();
  const data = profileData?.data[0];

  if (isLoading) {
    return (
      <ProfileContainer>
        <Loader />
      </ProfileContainer>
    );
  }
  return (
    <>
      {data ? (
        <ProfileContainer>
          <Image
            src={data.image_source}
            alt="Profile"
            width={28}
            height={28}
            style={{ borderRadius: '1.5rem' }}
          />
          <ProfileEmail>{data.email}</ProfileEmail>
        </ProfileContainer>
      ) : (
        <Button onClick={handleClick} className="login">
          로그인
        </Button>
      )}
    </>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const ProfileEmail = styled.p`
  font-size: 1.4rem;
  font-weight: 400;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 0;
  }
`;
export default Profile;
