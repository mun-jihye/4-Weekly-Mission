import DeleteModal from 'components/common/modal/DeleteModal';
import PostModal from 'components/common/modal/PostModal';
import ShareModal from 'components/common/modal/ShareModal';
import React from 'react';

interface OptionContentProps {
  modalName: string;
  folderName: string;
  categoryId: number;
  placeholder: string;
}
const OptionContent = ({
  modalName,
  folderName,
  categoryId,
  placeholder,
}: OptionContentProps) => {
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

export default OptionContent;
