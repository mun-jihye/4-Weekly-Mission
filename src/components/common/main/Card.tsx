import React from 'react';
import styled from 'styled-components';
import StarButton from 'components/folder/StarButton';
import KebabButton from 'components/folder/KebabButton';
import Image from 'next/image';

/**
 *
 * @param {Object} cardDatas
 * @param {number} cardDatas.id
 * @param {string} cardDatas.url
 * @param {string} cardDatas.imageURL
 * @param {string} cardDatas.title
 * @param {string} cardDatas.timePassed
 * @param {string} cardDatas.description
 * @param {string} cardDatas.formattedDate
 * @param {boolean} cardDatas.isFolder
 */
interface CardProps {
  url: string;
  imageURL?: string;
  title: string;
  timePassed: string;
  description: string;
  formattedDate: string;
  isFolder: boolean;
}
const Card = ({
  url,
  imageURL,
  title,
  timePassed,
  description,
  formattedDate,
  isFolder,
}: CardProps) => {
  const defaultImage = '/images/noImage.png';
  return (
    <>
      <StyledCard href={url} target="_blank" rel="noopener noreferrer">
        <CardImgContainer>
          {imageURL ? (
            <CardImg
              src={imageURL}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <Image
              src={defaultImage}
              width={340}
              height={180}
              alt="존재하지 않는 이미지"
            />
          )}

          {isFolder && <StarButton />}
        </CardImgContainer>
        <TextContainer>
          <SubContainer>
            <span>{timePassed}</span>
            {isFolder && <KebabButton url={url} />}
          </SubContainer>
          <StyledP>{description}</StyledP>
          <StyledP className="date">{formattedDate}</StyledP>
        </TextContainer>
      </StyledCard>
    </>
  );
};

const StyledCard = styled.a`
  position: relative;
  width: 100%;
  height: 30.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 34rem;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 34rem;
  }
`;
const CardImgContainer = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
  position: relative;
`;
const CardImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.3);
  }
`;

const TextContainer = styled.div`
  padding: 1.4rem 2rem;
  text-align: start;
  width: 100%;
  height: 13.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  span {
    color: #666666;
    font-size: 1.3rem;
  }
  .date {
    color: #333333;
    font-size: 1.4rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledP = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  color: black;
`;
export default Card;
