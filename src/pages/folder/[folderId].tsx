import { useInView } from 'react-intersection-observer';
import AddLink from 'components/common/header/folder/AddLink';
import { HeaderContainer } from 'styles/HeaderContainer';
import React, { useEffect, useState } from 'react';
import { MainContainer } from 'styles/MainContainer';
import Search from 'components/common/main/Search';
import CategoryContext from 'contexts/CategoryContext';
import CategoryTabList from 'components/folder/CategoryTabList';
import Loader from 'components/common/Loader';
import CardGrid from 'components/common/main/CardGrid';
import CardError from 'components/common/main/CardError';
import filterByKeyword from 'utils/filterByKeyword';
import FixedAddLink from 'components/common/header/folder/FixedAddLink';
import { useRouter } from 'next/router';
import { getCategory, getFolderLink } from 'lib/folderAPI';
import Head from 'next/head';
import NavBar from 'components/common/header/NavBar';
import { CategoryData, FolderLinkData } from 'types/folderDataType';
import { getUser } from 'lib/sampleAPI';
import { User } from 'types/userDataType';
import { authCheck } from 'utils/authCheck';

interface FolderPageProps {
  categoryData: CategoryData;
  initialFolderData: FolderLinkData;
  profileData: User;
}
export async function getServerSideProps() {
  const categoryData = await getCategory(1);
  const initialFolderData = await getFolderLink('');
  const profile = await getUser();
  const profileData = profile.data[0];
  return {
    props: {
      categoryData,
      initialFolderData,
      profileData,
    },
  };
}

const FolderPage = ({
  categoryData,
  initialFolderData,
  profileData,
}: FolderPageProps) => {
  const router = useRouter();
  const [headerRef, inHeaderView] = useInView();
  const [footerRef, inFooterView] = useInView();

  const [searchTerm, setSearchTerm] = useState<string>(
    router.query.keyword ? String(router.query.keyword) : ''
  );
  const [currentCategory, setCurrentCategory] = useState<{
    id: string;
    name: string;
  }>({
    id: 'all',
    name: '전체',
  });
  const [folderData, setFolderData] = useState(initialFolderData);

  const folderId = currentCategory.id === 'all' ? '' : currentCategory.id;
  const filteredLinks = filterByKeyword(folderData?.data || [], searchTerm);
  const hasFilteredLinks = filteredLinks.length !== 0;
  const categoryDatas = categoryData?.data && [
    { id: 'all', name: '전체' },
    ...categoryData?.data,
  ];

  const handleCategoryButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentCategory({
      id: e.currentTarget.id,
      name: e.currentTarget.innerText,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getFolderLink(folderId);
      setFolderData(data);
    }
    fetchData();
  }, [folderId]);

  useEffect(() => {
    setSearchTerm(router.query.keyword ? String(router.query.keyword) : '');
  }, [router.query.keyword]);

  useEffect(() => {
    authCheck(router);
    /* eslint-disable-next-line */
  }, []);

  return (
    <>
      <Head>
        <title>folder | Linkbrary</title>
      </Head>
      <CategoryContext.Provider value={categoryData}>
        <NavBar profileData={profileData} />
        <HeaderContainer ref={headerRef}>
          <AddLink isBottom={false} />
        </HeaderContainer>
        <MainContainer>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            url={router.pathname}
          />
          <CategoryTabList
            categoryDatas={categoryDatas}
            currentCategory={currentCategory.name}
            handleCategoryButton={handleCategoryButton}
            categoryId={folderId}
          />
          {!folderData ? (
            <Loader />
          ) : hasFilteredLinks ? (
            <CardGrid datas={filteredLinks} isFolder={true} />
          ) : (
            <CardError description="😰 일치하는 검색 결과가 없습니다." />
          )}
          {!inHeaderView && !inFooterView && <FixedAddLink />}
        </MainContainer>
        <div ref={footerRef}></div>
      </CategoryContext.Provider>
    </>
  );
};

export default FolderPage;
