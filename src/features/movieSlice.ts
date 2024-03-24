import { createSlice } from '@reduxjs/toolkit';
import { fetchMovieInfo, fetchMovies } from '../thunks';
import { Movie, MovieInfoData } from '../interfaces';

interface InitialState {
  loading: boolean;
  data: Movie[];
  isError: boolean;
  movieInfo: {
    loading: boolean;
    data: MovieInfoData | null;
    isError: boolean;
  };
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    loading: false,
    data: [],
    isError: false,
    movieInfo: {
      loading: false,
      data: null,
      isError: false,
    },
  } as InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loading = true;
      state.isError = false;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
    builder.addCase(fetchMovieInfo.pending, (state, action) => {
      state.movieInfo.loading = true;
      state.movieInfo.isError = false;
    });
    builder.addCase(fetchMovieInfo.fulfilled, (state, action) => {
      state.movieInfo.loading = false;
      state.movieInfo.data = action.payload;
    });
    builder.addCase(fetchMovieInfo.rejected, (state, action) => {
      state.movieInfo.loading = false;
      state.movieInfo.isError = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = movieSlice.actions;

export default movieSlice.reducer;
