import React, { useEffect, useRef } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import MovieInfo from './pages/movieInfo/MovieInfo';
import { useAppDispatch } from './hooks';
import { fetchMovies } from './thunks';

function App() {
  let mount = useRef(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!mount.current) {
      dispatch(fetchMovies(''));
    }

    mount.current = true;
    return () => {};
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/movie/:movieId" Component={MovieInfo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
