import Loader from '../../../common/Loader';
import { sampleFolderInquire } from 'api/sampleAPI';
import useFetchData from 'hook/useFetchData';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const {
    data: folderInfo,
    isLoading,
    isError,
    error,
  } = useFetchData(sampleFolderInquire, 'folderInfo', data => ({
    ownerName: data.folder.owner.name,
    folderName: data.folder.name,
    profileImage: data.folder.owner.profileImageSource,
  }));

  if (isError) {
    console.log(error);
  }
  return (
    <StyledHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <HeroHeader>
          <StyledProfile>
            <ProfileImage
              src={folderInfo.profileImage}
              alt={folderInfo.ownerName}
            />
            <OwnerName>@{folderInfo.ownerName}</OwnerName>
          </StyledProfile>
          <FolderName>{folderInfo.folderName}</FolderName>
        </HeroHeader>
      )}
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;
`;
const HeroHeader = styled.div`
  display: flex;
  padding: 2.8rem 3.2rem;
  flex-direction: column;
  align-items: center;
  row-gap: 2.4rem;
`;
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;
const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const OwnerName = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const FolderName = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
`;
export default Header;