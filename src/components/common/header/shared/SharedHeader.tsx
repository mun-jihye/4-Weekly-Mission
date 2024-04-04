import CardError from 'components/common/main/CardError';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { HeaderContainer } from 'styles/HeaderContainer';
import NavBar from '../NavBar';
import { SharedInfo } from 'types/sharedDataType';

interface SharedHeaderProps {
  folderInfo: SharedInfo;
}

const SharedHeader = ({ folderInfo }: SharedHeaderProps) => {
  return (
    <HeaderContainer>
      <NavBar />
      {!folderInfo ? (
        <CardError description="😰 데이터를 불러오는데 실패했습니다." />
      ) : (
        <HeroHeader>
          <StyledProfile>
            <ProfileImage
              src={folderInfo.profileImage}
              alt={folderInfo.ownerName}
              width={60}
              height={60}
            />
            <OwnerName>@{folderInfo.ownerName}</OwnerName>
          </StyledProfile>
          <FolderName>{folderInfo.folderName}</FolderName>
        </HeroHeader>
      )}
    </HeaderContainer>
  );
};

const HeroHeader = styled.div`
  margin-top: 9.4rem;
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
const ProfileImage = styled(Image)`
  object-fit: cover;
`;

const OwnerName = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const FolderName = styled.div`
  font-size: 3rem;
  font-weight: 600;
  line-height: normal;
`;
export default SharedHeader;
