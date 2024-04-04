import React, { useEffect, useState } from 'react';
import SharedHeader from 'components/common/header/shared/SharedHeader';
import Search from 'components/common/main/Search';
import { MainContainer } from 'styles/MainContainer';
import CardGrid from 'components/common/main/CardGrid';
import CardError from 'components/common/main/CardError';
import { useRouter } from 'next/router';
import filterByKeyword from 'utils/filterByKeyword';
import Head from 'next/head';
import { sampleFolderInquire } from 'lib/sampleAPI';
import { SharedLink } from 'types/sharedDataType';

interface SharedPageProps {
  sharedDatas: SharedLink[];
}
export async function getStaticProps() {
  const sampleFolderData = await sampleFolderInquire();
  const sharedDatas = sampleFolderData?.folder.links;
  return {
    props: {
      sharedDatas,
    },
  };
}

const SharedPage = ({ sharedDatas }: SharedPageProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>(
    router.query.keyword ? String(router.query.keyword) : ''
  );

  const filteredLinks = filterByKeyword(sharedDatas || [], searchTerm);
  const hasFilteredLinks = filteredLinks.length !== 0;

  useEffect(() => {
    setSearchTerm(router.query.keyword ? String(router.query.keyword) : '');
  }, [router.query.keyword]);

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
        {!sharedDatas ? (
          <CardError description="😰 저장된 링크가 없습니다." />
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
