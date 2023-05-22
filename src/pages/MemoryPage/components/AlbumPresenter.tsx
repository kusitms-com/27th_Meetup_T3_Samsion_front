import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlbumContainer } from './style/AlbumPresenterStyle';
import { getAlbumContentType } from '../../../type/AlbumType';

type AlbumPresenterProps = {
  albumData: getAlbumContentType[];
};

const AlbumPresenter = ({ albumData }: AlbumPresenterProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleToDetail = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    navigate(`${pathname}/1`);
  };

  return (
    <AlbumContainer>
      {albumData.map((item) => (
        <button
          className="imgLink"
          onClick={handleToDetail}
          id={item.albumId.toString()}
          key={item.albumId}
        >
          <figure>
            <img src={item.imageUrl} loading="lazy" alt={item.title} />
            <div className="figBox">
              <figcaption>
                <div className="figItemBox">
                  <img src="/img/HeartDog.svg" alt="HeartDog" className="figItemImg" />
                  <div>{item.empathyCount}</div>
                </div>
                <div className="figItemBox">
                  <img src="/img/Comment.svg" alt="Comment" className="figItemImg" />
                  <div>{item.commentCount}</div>
                </div>
              </figcaption>
            </div>
          </figure>
        </button>
      ))}
    </AlbumContainer>
  );
};

export default AlbumPresenter;
