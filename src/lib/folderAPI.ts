import { CategoryData, FolderLinkData } from 'types/folderDataType';
import { fetchRequest } from './index';
import { CATEGORY, FOLDER_LINK } from 'utils/config';

/**
 * folderId에 따른 데이터를 불러오는 함수
 * @param {string} folderId 폴더의 ID. 'all'을 입력하면 모든 폴더의 데이터 의미.
 * @returns {Promise<FolderLinkData>}
 */
export const getFolderLink = async (
  folderId?: string
): Promise<FolderLinkData> => {
  if (folderId !== 'all') {
    const resData = await fetchRequest({
      url: FOLDER_LINK + `?folderId=${folderId}`,
      method: 'GET',
    });
    return resData;
  } else {
    const resData = await fetchRequest({ url: FOLDER_LINK, method: 'GET' });
    return resData;
  }
};

/**
 * userId에 따른 카테고리 목록 데이터 불러오는 함수
 * @param {number} userId
 * @returns {Promise<CategoryData>}
 */
export const getCategory = async (userId: number): Promise<CategoryData> => {
  const data = await fetchRequest({
    url: CATEGORY + `/${userId}/folders`,
    method: 'GET',
  });
  return data;
};
