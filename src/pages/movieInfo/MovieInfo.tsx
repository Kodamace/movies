import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovieInfo } from '../../thunks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, CircularProgress } from '@mui/material';
import { StyledMovieExtraInfo, StyledMoviePage } from '../Styles';
import Review from './components/Review';

const MovieInfo = () => {
  const { loading, data, isError } = useAppSelector(
    (state) => state.movies.movieInfo
  );
  let mountedRef = useRef(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieId && !mountedRef.current) {
      dispatch(fetchMovieInfo(movieId));
      mountedRef.current = true;
    }

    return () => {};
  }, [movieId, dispatch]);

  if (isError) return <p>Error occurred. Please contact support.</p>;

  return (
    <StyledMoviePage>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Button
            style={{ position: 'absolute', left: 8, top: 8 }}
            variant="contained"
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
          <h3>
            <strong>Title: </strong>
            {data?.fake?.['#TITLE'] || 'Not found'}
          </h3>
          <img src={data?.fake['#IMG_POSTER']} alt="" />
          <StyledMovieExtraInfo>
            <p>
              <strong>Description: </strong>
              {data?.short?.description || 'Not found'}
            </p>
            <div>
              <strong>Actors: </strong>
              {data?.short?.actor.map((actor, i) => (
                <p key={actor.name + i}>{actor.name}</p>
              ))}
            </div>
            <div>
              <strong>Reviews: </strong>
              {data?.main?.featuredReviews?.edges?.map((rv, i) => (
                <Review html={rv.node.text.originalText.plaidHtml} key={i} />
              ))}
            </div>
            <p>
              <strong>Keywords: </strong>
              {data?.short?.keywords || 'Not found'}
            </p>
          </StyledMovieExtraInfo>
        </>
      )}
    </StyledMoviePage>
  );
};

export default MovieInfo;
