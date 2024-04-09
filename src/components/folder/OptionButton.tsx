import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'components/common/modal/Modal';
import PostModal from 'components/common/modal/PostModal';
import DeleteModal from 'components/common/modal/DeleteModal';
import ShareModal from 'components/common/modal/ShareModal';
import Image from 'next/image';

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
  const renderModalContent = () => {
    switch (modalName) {
      case '공유':
        return <ShareModal subTitle={folderName} categoryId={categoryId} />;
      case '이름 변경':
        return (
          <PostModal
            title="폴더 이름 변경"
            placeholder={placeholder}
            isAdd={false}
          />
        );
      case '삭제':
        return <DeleteModal title="폴더 삭제" subTitle={folderName} />;
      default:
        return null;
    }
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
          {renderModalContent()}
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
