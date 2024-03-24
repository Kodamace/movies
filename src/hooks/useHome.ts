import { useRef, useState } from 'react';
import { useAppDispatch } from '.';
import { fetchMovies } from '../thunks';

export const useHome = () => {
  const timeOutSearchRef = useRef<any>(null);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useAppDispatch();
  const handleSearchWithDebounce = async (searchTerm: string) => {
    setIsSearching(true);
    setSearchedMovie(searchTerm);
    if (timeOutSearchRef.current) {
      clearTimeout(timeOutSearchRef.current);
    }
    timeOutSearchRef.current = setTimeout(() => {
      dispatch(fetchMovies(searchTerm));
      setIsSearching(false);
    }, 1000);
  };

  return {
    handleSearchWithDebounce,
    searchedMovie,
    isSearching,
  };
};
