import {
  IAnimeDetails,
  IAnimePrewiew,
  animeEndpoint,
} from '@/models/anime.model';
import { ApiResponse, httpClient } from '@/utils';

class AnimeAPI {
  static getDescriptionById(
    lang: string,
    id: number,
  ): ApiResponse<IAnimeDetails> {
    return httpClient.get<IAnimeDetails>(
      animeEndpoint.getDetailsById(lang, id),
    );
  }

  static getPreviews(lang: string): ApiResponse<IAnimePrewiew[]> {
    return httpClient.get<IAnimePrewiew[]>(animeEndpoint.getPrewiews(lang));
  }
}

export default AnimeAPI;
