import React, { FC } from 'react';
import {
  StyledMovieInner,
  StyledMovieImg,
  StyledMovieInfo,
  StyledMovieOuter,
} from '../../Styles';
import { Movie } from '../../../interfaces';
import { useNavigate } from 'react-router-dom';
interface IMovieProps {
  movie: Movie;
}

const MovieItem: FC<IMovieProps> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <StyledMovieOuter onClick={() => navigate(`/movie/${movie['#IMDB_ID']}`)}>
      <StyledMovieInner>
        <StyledMovieInfo>
          <p>Title: {movie['#TITLE']}</p>
          <p>Actors: {movie['#ACTORS']}</p>
          <p>Year: {movie['#YEAR']}</p>
          <p>Rank: {movie['#RANK']}</p>
        </StyledMovieInfo>
        <StyledMovieImg src={movie['#IMG_POSTER']} alt="Movie poster" />
      </StyledMovieInner>
    </StyledMovieOuter>
  );
};

export default MovieItem;
