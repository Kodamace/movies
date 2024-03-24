import React from 'react';
import { CircularProgress, TextField } from '@mui/material';
import { StyledHomePage } from '../Styles';
import { Movie } from '../../interfaces';
import MovieItem from './components/MovieItem';
import { useAppSelector } from '../../hooks';
import { useHome } from '../../hooks/useHome';

const Home = () => {
  const { data, loading, isError } = useAppSelector((state) => state.movies);
  const { handleSearchWithDebounce, isSearching, searchedMovie } = useHome();
  if (isError) return <p>Error occurred. Please contact support.</p>;
  return (
    <StyledHomePage>
      <h3>Welcome To Mad Movies</h3>
      <TextField
        style={{ backgroundColor: 'white', borderRadius: 8 }}
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => handleSearchWithDebounce(e.target.value)}
        placeholder="Search movies"
        value={searchedMovie}
      />
      {loading || isSearching ? (
        <CircularProgress />
      ) : (
        <div>
          {data.map((movie: Movie, i: number) => (
            <MovieItem key={i} movie={movie} />
          ))}
        </div>
      )}
    </StyledHomePage>
  );
};

export default Home;
