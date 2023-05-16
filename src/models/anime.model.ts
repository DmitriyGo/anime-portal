enum AnimeEndpoint {
  GET_ANIME_BY_ID = '/anime',
  GET_PREVIEW_BY_ID = '/anime/preview',
}

export const animeEndpoint = {
  getAnimeById: (id: number) => {
    return `${AnimeEndpoint.GET_ANIME_BY_ID}/${id}`;
  },
};

export interface IPhoto {
  id: number;
  imageUrl: string;
  publicId: string;
  title: string;
  photoType: string;
}

export interface IAnime {
  id: string;
  title: string;
  poster: string;
  placement: string;
  duration: string;
  description: string;
  author: string;
  videoUrl: string;
  rating: string;
  photos: IPhoto[];
  date: string;
  tags: string[];
  postedBy: string[];
}
