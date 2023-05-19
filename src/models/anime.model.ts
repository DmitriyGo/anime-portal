const Endpoint = {
  GET_PREWIEWS_BY_ID: (lang: string) => `/anime/${lang}/prewiew`,
  GET_PREWIEWS_TOP: (lang: string) => `/anime/${lang}/previews/Top`,
  GET_DETAILS_BY_ID: (lang: string) => `/anime/${lang}/detailed`,
};

export const animeEndpoint = {
  getPrewiewById: (lang: string, id: number) => {
    return `${Endpoint.GET_PREWIEWS_BY_ID(lang)}/${id}`;
  },
  getPrewiews: (lang: string) => {
    return `${Endpoint.GET_PREWIEWS_TOP(lang)}`;
  },
  getDetailsById: (lang: string, id: number) => {
    return `${Endpoint.GET_DETAILS_BY_ID(lang)}/${id}`;
  },
};

export interface IName {
  name: string;
}

export interface IAnimePrewiew {
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
