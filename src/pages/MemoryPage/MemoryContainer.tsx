import { Outlet, useLocation } from 'react-router-dom';
import { MemoryNav, EmotionTags } from './components';
import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import styled from 'styled-components';

const MemoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;

const MemoryContainer = () => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setCurrentPath(pathname);
  }, [location]);

  const temp = [
    { name: ' 아늑함', isActive: false, tagId: 'COZY' },
    { name: '행복함', isActive: false, tagId: 'HAPPY' },
    { name: '즐거움', isActive: false, tagId: 'JOY' },
    { name: '그리움', isActive: false, tagId: 'MISS' },
    { name: '감동적', isActive: false, tagId: 'TOUCHING' },
    { name: '편안함', isActive: false, tagId: 'COMFORTABLE' },
    { name: '유쾌함', isActive: false, tagId: 'CHEERFUL' },
    { name: '자랑스러움', isActive: false, tagId: 'PROUD' },
    { name: '외로움', isActive: false, tagId: 'LONELY' },
    { name: '사랑스러움', isActive: false, tagId: 'LOVELY' },
  ];

  return (
    <MemoryWrapper>
      {currentPath !== '/memory/question' ? (
        <Banner url={'/img/AlbumBanner.jpg'} />
      ) : (
        <Banner url={'/img/QuestionBanner.jpg'} />
      )}
      <MemoryNav />
      {currentPath !== '/memory/question' && (
        <EmotionTags width="80vw" isMargin={true} fontSize={16} temp={temp} />
      )}
      <Outlet />
    </MemoryWrapper>
  );
};

export default MemoryContainer;
