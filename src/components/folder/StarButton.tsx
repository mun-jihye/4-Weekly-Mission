import Image from 'next/image';
import { styled } from 'styled-components';

interface StarButtonProps {
  isActive?: boolean;
}

const StarButton = ({ isActive }: StarButtonProps) => {
  const src = isActive
    ? '/images/icons/fillStar.svg'
    : '/images/icons/emptyStar.svg';

  return (
    <StyledButton>
      <Image src={src} alt="찜 버튼" width={32} height={33} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
`;
export default StarButton;
