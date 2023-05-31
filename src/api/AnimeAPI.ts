import {
  IAnimeDetails,
  IAnimePreview,
  getAnimeEndpoints,
} from '@/models/anime.model';
import { ApiResponse, httpClient } from '@/utils';

class AnimeAPI {
  static getAnimeDetailsById(
    lang: string,
    id: number,
  ): ApiResponse<IAnimeDetails> {
    return httpClient.get<IAnimeDetails>(
      getAnimeEndpoints(lang).detailsById(id),
    );
  }

  static getPreviews(lang: string): ApiResponse<IAnimePreview[]> {
    return httpClient.get<IAnimePreview[]>(getAnimeEndpoints(lang).previews());
  }
}

export default AnimeAPI;
