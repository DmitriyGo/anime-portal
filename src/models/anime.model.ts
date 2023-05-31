const ANIME_PREFIX = '/anime';

export const getAnimeEndpoints = (lang: string) => {
  return {
    previewById: (id: number) => {
      return `${ANIME_PREFIX}/${lang}/preview/${id}`;
    },
    previews: () => {
      return `${ANIME_PREFIX}/${lang}/previews`;
    },
    detailsById: (id: number) => {
      return `${ANIME_PREFIX}/${lang}/detailed/${id}`;
    },
  };
};

export interface IName {
  name: string;
}

export interface IAnimePreview {
  id: number;
  date: string;
  rating: number;
  studio: string;
  duration: string;
  spotlight: string;
  animeDescription: IAnimeDescription;
  tags: IName[];
}

export interface IAnimeDetails {
  animeDescription: IAnimeDescription;
  screenshots: string[];
  tags: IName[];
  poster: string;
  studio: string;
  rating: number;
}

export interface IAnimeDescription {
  language: IName;
  title: string;
  status: string;
  author: string;
  placement: string;
  description: string;
  genres: IName[];
}
