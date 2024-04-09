import { styled } from 'styled-components';
import { useState } from 'react';
import BUTTON from 'utils/constants/BUTTON';
import Modal from 'components/common/modal/Modal';
import Image from 'next/image';
import KebabContent from './KebabContent';

/**
 *
 * @param {Object} props
 * @param {string} url 카드에 해당하는 링크
 * @returns
 */
interface KebabButtonProps {
  url: string;
}
const KebabButton = ({ url }: KebabButtonProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [optionName, setOptionName] = useState<string>('');
  const handleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setShowMenu(!showMenu);
  };
  const handleClick = (option: string) => {
    setShowMenu(false);
    setShowModal(true);
    setOptionName(option);
  };

  return (
    <>
      <StyledButton onClick={handleMenu}>
        <Image
          src="/images/icons/kebab.svg"
          alt="더보기 버튼"
          width={21}
          height={17}
        />
        {showMenu && (
          <StyledModal>
            {BUTTON.KEBAB_OPTION.map(option => (
              <StyledMenu
                key={option}
                onClick={() => {
                  handleClick(option);
                }}
              >
                {option}
              </StyledMenu>
            ))}
          </StyledModal>
        )}
      </StyledButton>
      {showModal && (
        <Modal showModal={showModal} handleClose={() => setShowModal(false)}>
          <KebabContent optionName={optionName} url={url} />
        </Modal>
      )}
    </>
  );
};
export default KebabButton;

const StyledButton = styled.button`
  background: transparent;
  width: 2.1rem;
  height: 1.7rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.ul`
  width: 10rem;
  position: absolute;
  left: -7.5rem;
  top: 2rem;
  box-shadow: 0 0.2rem 0.8rem 0 #3332361a;
  border-radius: 0.5rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.white};
`;
const StyledMenu = styled.li`
  width: 100%;
  padding: 0.7rem 0;
  font-size: 1.4rem;
  &:hover {
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.linkbrary_bg};
    transition: all ease-in-out 200ms;
  }
`;
