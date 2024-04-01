import React, { useEffect, useState } from 'react';
import SharedHeader from 'components/common/header/shared/SharedHeader';
import Search from 'components/common/main/Search';
import { MainContainer } from 'styles/MainContainer';
import CardGrid from 'components/common/main/CardGrid';
import { useSampleFolderQuery } from 'hooks/useFetchData';
import CardError from 'components/common/main/CardError';
import Loader from 'components/common/Loader';
import { useRouter } from 'next/router';
import filterByKeyword from 'utils/filterByKeyword';
import Head from 'next/head';

const SharedPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>(
    router.query.keyword ? String(router.query.keyword) : ''
  );

  const { data, isLoading, isError } = useSampleFolderQuery('sharedDatas');
  const sharedDatas = data?.folder.links;
  const filteredLinks = filterByKeyword(sharedDatas || [], searchTerm);
  const hasFilteredLinks = filteredLinks.length !== 0;

  useEffect(() => {
    setSearchTerm(router.query.keyword ? String(router.query.keyword) : '');
  }, [router.query.keyword]);

  if (isError) {
    return <CardError description="😰 저장된 링크가 없습니다." />;
  }
  return (
    <>
      <Head>
        <title>share | Linkbrary</title>
      </Head>
      <SharedHeader />
      <MainContainer>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          url={router.pathname}
        />
        {isLoading ? (
          <Loader />
        ) : hasFilteredLinks ? (
          <CardGrid datas={filteredLinks} isFolder={false} />
        ) : (
          <CardError description="😰 일치하는 검색 결과가 없습니다." />
        )}
      </MainContainer>
    </>
  );
};

export default SharedPage;
