import React, { useEffect } from 'react';
import styled from 'styled-components';

/**
 *
 * @param {Object} props
 * @param {string} props.subTitle 공유할 폴더 제목
 * @param {number} props.categoryId 공유할 폴더 아이디
 * @returns
 */
interface ShareModalProps {
  subTitle: string;
  categoryId: number;
}

const ShareModal = ({ subTitle, categoryId }: ShareModalProps) => {
  const shareLink = `${window.location.origin}/shared/${categoryId}`;
  const { Kakao } = window;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    script.async = true;
    script.onload = () => {
      window.Kakao.cleanup();
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: '세상의 모든 정보를 쉽게 관리해보세요',
        imageUrl: '/images/meta.png',
        link: {
          mobileWebUrl: shareLink,
          webUrl: shareLink,
        },
      },
    });
  };
  const handleFacebook = () => {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + shareLink,
      '_blank',
      'width=600,height=400'
    );
  };
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        alert('링크가 복사되었습니다.');
      })
      .catch(error => {
        console.error('Could not copy text: ', error);
      });
  };
  return (
    <Container>
      <StyledTitle>
        폴더 공유
        <StyledSubTitle>{subTitle}</StyledSubTitle>
      </StyledTitle>
      <GridContainer>
        <FlexContainer>
          <StyledButton className="kakao" onClick={handleKakao}>
            <img src="/images/modal/Kakao.png" alt="share by kakao" />
          </StyledButton>
          <StyledButtonName>카카오톡</StyledButtonName>
        </FlexContainer>
        <FlexContainer>
          <StyledButton className="facebook" onClick={handleFacebook}>
            <img src="/images/icons/Facebook.png" alt="share by facebook" />
          </StyledButton>
          <StyledButtonName>페이스북</StyledButtonName>
        </FlexContainer>
        <FlexContainer>
          <StyledButton className="copyLInk" onClick={handleCopyLink}>
            <img src="/images/modal/copyLink.png" alt="share by copy lInk" />
          </StyledButton>
          <StyledButtonName>링크 복사</StyledButtonName>
        </FlexContainer>
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  margin: 1rem;
`;
const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;
const StyledSubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.gray60};
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  grid-column-gap: 3.2rem;
  justify-content: center;
  align-items: center;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 3.7rem;
  padding: 1.2rem;
  background-color: ${props => {
    if (props.className === 'kakao') return '#FEE500';
    if (props.className === 'facebook') return '#1877F2';
    if (props.className === 'copyLink') return '#9d9d9d';
  }};
`;
const StyledButtonName = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
`;
export default ShareModal;
