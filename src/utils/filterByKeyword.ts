import { FolderLink } from 'types/folderDataType';

type Keyword = string | null;

const filterByKeyword = (data: FolderLink[], keyword: Keyword) => {
  if (!keyword) return data;

  const lowerCaseKeyword = keyword.toLowerCase();

  return data.filter(item => {
    return (
      item.url?.toLowerCase().includes(lowerCaseKeyword) ||
      item.title?.toLowerCase().includes(lowerCaseKeyword) ||
      item.description?.toLowerCase().includes(lowerCaseKeyword)
    );
  });
};

export default filterByKeyword;
