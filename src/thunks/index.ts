import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieInfoData } from '../interfaces';
import { fetchMovieInfoQuery, fetchMoviesQuery } from '../SDK/queries';

export const fetchMovies = createAsyncThunk(
  'fetchMovies',
  async (searchString: string) => {
    const data = await fetchMoviesQuery(searchString);
    return data;
  }
);
export const fetchMovieInfo = createAsyncThunk(
  'fetchMovieInfo',
  async (id: string): Promise<MovieInfoData> => {
    const data = await fetchMovieInfoQuery(id);
    return data;
  }
);
