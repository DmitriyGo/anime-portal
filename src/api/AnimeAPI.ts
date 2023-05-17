import { IAnimePrewiew, animeEndpoint } from '@/models/anime.model';
import { ApiResponse, httpClient } from '@/utils';

class AnimeAPI {
  static getDescriptionById(lang: string, id: number): ApiResponse<unknown> {
    return httpClient.get<unknown>(animeEndpoint.getDetailsById(lang, id));
  }

  static getPreviews(lang: string): ApiResponse<IAnimePrewiew[]> {
    return httpClient.get<IAnimePrewiew[]>(animeEndpoint.getPrewiews(lang));
  }
}

export default AnimeAPI;
