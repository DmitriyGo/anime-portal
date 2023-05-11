import { IAnime, animeEndpoints } from '@/models/anime.model';
import { ApiResponse, httpClient } from '@/utils';

class AnimeAPI {
  static getAnimeById(id: number): ApiResponse<IAnime> {
    return httpClient.get<IAnime>(animeEndpoints.getAnimeById(+id));
  }
}

export default AnimeAPI;
