import { FolderLink } from 'types/folderDataType';
import { SharedLink } from 'types/sharedDataType';

type Keyword = string | null;
type Data = FolderLink[] | SharedLink[];

const filterByKeyword = (data: Data, keyword: Keyword) => {
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
