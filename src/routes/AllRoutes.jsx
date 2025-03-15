import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails, MovieLists, PageNotFound, Search } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MovieLists title='Your Guide To Great Movies' apipath='movie/now_playing' />}></Route>
      <Route path='Movies/Popular' element={<MovieLists title='Popular Movies' apipath='movie/popular' />}></Route>
      <Route path='Movies/Top' element={<MovieLists title='Top Rated Movies' apipath='movie/top_rated' />}></Route>
      <Route path='Movies/Upcoming' element={<MovieLists title='Upcoming Movies' apipath='movie/upcoming' />}></Route>
      <Route path='movie/:id' element={<MovieDetails />}></Route>
      <Route path='search' element={<Search apipath='search/movie'/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
  );
};
