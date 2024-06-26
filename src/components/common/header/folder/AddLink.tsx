import AddFolderModal from 'components/common/modal/AddFolderModal';
import Button from 'components/common/Button';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Modal from 'components/common/modal/Modal';
import Image from 'next/image';

interface AddLinkProps {
  isBottom: boolean;
}

const AddLink = ({ isBottom }: AddLinkProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setInputValue('');
  };
  return (
    <>
      <StyledForm isBottom={isBottom}>
        <Icon
          isBottom={isBottom}
          src="/images/icons/linkIcon.png"
          alt="link icon"
          width={20}
          height={20}
        />
        <StyledInput
          type="text"
          className="link-add-box"
          placeholder="링크를 추가해 보세요"
          value={inputValue}
          onChange={handleChange}
        />
        <StyledButton
          isBottom={isBottom}
          className="folderLink"
          onClick={handleClick}
        >
          추가하기
        </StyledButton>
      </StyledForm>
      {showModal && (
        <Modal showModal={showModal} handleClose={handleClose}>
          <AddFolderModal subTitle={inputValue} />
        </Modal>
      )}
    </>
  );
};

const StyledForm = styled.form<AddLinkProps>`
  position: relative;
  padding: ${props => (props.isBottom ? '3rem 0' : '6rem 0 9rem')};
  margin-top: ${props => (props.isBottom ? '0' : '9.4rem')};

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 2.4rem 0 4rem;
  }
`;
const Icon = styled(Image)<AddLinkProps>`
  position: absolute;
  left: 2rem;
  top: ${props => (props.isBottom ? '5.5rem' : '8.5rem')};
  width: 2rem;
  height: 2rem;
  @media (min-width: 375px) and (max-width: 767px) {
    top: 4.2rem;
    left: 1.5rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`;
const StyledInput = styled.input`
  width: 80rem;
  margin: 0 auto;
  height: 6.9rem;
  border-radius: 1.5rem;
  border: 0.1rem solid ${props => props.theme.primary};
  padding: 1.6rem 2rem 1.6rem 5.2rem;
  font-size: 1.6rem;
  @media (max-width: 1199px) {
    max-width: 70.4rem;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 44.1rem;
    height: 5.3rem;
    padding: 0.8rem 3.6rem;
    font-size: 1.4rem;
  }
`;
const StyledButton = styled(Button)<AddLinkProps>`
  position: absolute;
  left: 70.5rem;
  bottom: ${props => (props.isBottom ? '4.5rem' : '10.5rem')};
  @media (max-width: 1199px) {
    left: 61.2rem;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    left: 35rem;
    bottom: 4.7rem;
  }
`;

export default AddLink;
