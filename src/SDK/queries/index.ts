import { Movie } from '../../interfaces';
const BASE_URL = 'https://search.imdbot.workers.dev/';
const client = async (query: string) => {
  try {
    return fetch(`${BASE_URL}${query}`);
  } catch (error) {
    throw error;
  }
};

export async function fetchMoviesQuery(searchResult: string = '') {
  try {
    const data = await client(`?q=${searchResult}`);
    const results: { description: Movie[]; error_code: number; ok: boolean } =
      await data.json();
    return results.description;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieInfoQuery(movieId: string = '') {
  try {
    const apiUrl = `?tt=${movieId}`;
    const response = await client(apiUrl);
    const results = await response.json();
    return results;
  } catch (error) {
    throw error;
  }
}
