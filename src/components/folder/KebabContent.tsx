import AddFolderModal from 'components/common/modal/AddFolderModal';
import DeleteModal from 'components/common/modal/DeleteModal';
import React from 'react';

interface KebabContentProps {
  optionName: string;
  url: string;
}
const KebabContent = ({ optionName, url }: KebabContentProps) => {
  if (optionName === '삭제하기') {
    return <DeleteModal title="링크 삭제" subTitle={url} />;
  } else if (optionName === '삭제하기') {
    return <AddFolderModal subTitle={url} />;
  } else {
    return null;
  }
};

export default KebabContent;
