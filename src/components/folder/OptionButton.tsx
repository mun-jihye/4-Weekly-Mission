import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'components/common/modal/Modal';
import Image from 'next/image';
import OptionContent from './OptionContent';

/**
 *
 * @param {Object} props
 * @param {string} props.placeholder
 * @param {string} props.folderName 해당 카테고리(폴더)명
 * @param {number} props.categoryId 해당 카테고리(폴더) 아이디
 * @returns
 */
interface OptionButtonProps {
  placeholder: string;
  folderName: string;
  categoryId: number;
}
const BUTTON = [
  { url: '/images/icons/share.png', name: '공유' },
  { url: '/images/icons/pen.png', name: '이름 변경' },
  { url: '/images/icons/delete.png', name: '삭제' },
];

const OptionButton = ({
  placeholder,
  folderName,
  categoryId,
}: OptionButtonProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>('');

  const handleClick = (name: string) => {
    setShowModal(true);
    setModalName(name);
  };

  return (
    <OptionContainer>
      {BUTTON.map(button => (
        <Option key={button.name} onClick={() => handleClick(button.name)}>
          <Image src={button.url} width={18} height={18} alt="icon" />
          <OptionText>{button.name}</OptionText>
        </Option>
      ))}
      {showModal && (
        <Modal showModal={showModal} handleClose={() => setShowModal(false)}>
          <OptionContent
            modalName={modalName}
            folderName={folderName}
            categoryId={categoryId}
            placeholder={placeholder}
          />
        </Modal>
      )}
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const Option = styled.button`
  background: transparent;
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
`;

const OptionText = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  color: ${props => props.theme.gray20};
`;
export default OptionButton;
