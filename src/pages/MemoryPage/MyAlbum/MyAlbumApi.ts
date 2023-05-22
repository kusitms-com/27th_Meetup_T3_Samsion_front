import * as API from '../../../api/API';

type getAlbumParmas = {
  page: number;
  size?: number;
  sortOption: string;
  activeTags: string[];
};

export const getMyAlbum = async ({
  page = 0,
  size = 12,
  sortOption,
  activeTags,
}: getAlbumParmas) => {
  const activeTagsStr = activeTags.join(',');
  console.log(activeTagsStr);
  return await API.get(
    `/album/private?page=${page}&size=${size}&emotionTagList=${activeTagsStr}&sortType=${sortOption}`,
  );
};
