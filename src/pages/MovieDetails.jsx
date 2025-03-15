

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profile from '../assets/profile-img.jpg';
import { converMinutes } from '../utils/utils';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setMovie(jsonData);
        document.title = jsonData.title || 'Movie Details';
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]); // URL dependency removed

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : profile;

  return (
    <main className='container'>
      <h5 className='text-danger py-2 border-bottom'>{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt={movie.title} className='img-fluid img-thumbnail' />
        </div>
        <div className="col-md-8">
          <h3 className='text-primary'>{movie.title}</h3>
          <p className='mt-3'>{movie.overview}</p>
          {movie.genres && (
            <p className='d-flex gap-3'>
              {movie.genres.map((genre) => (
                <span key={genre.id} className='badge bg-danger'>{genre.name}</span>
              ))}
            </p>
          )}
          <p className='mt-2 '>
            <i className='bi bi-star-fill text-warning'></i> {movie.vote_average} |
            <i className='bi bi-people-fill text-success'></i> {movie.vote_count} Reviews
          </p>
          <table className='table table-bordered w-50 mt-2'>
            <tbody>
              <tr>
                <th>RunTime</th>
                <td>{converMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>${movie.budget ? movie.budget.toLocaleString() : 'N/A'}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>${movie.revenue ? movie.revenue.toLocaleString() : 'N/A'}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>
          {movie.imdb_id && (
            <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} className='btn btn-warning' target='_blank' rel='noopener noreferrer'>
              View In IMDB
            </a>
          )}
        </div>
      </div>
    </main>
  );
};
