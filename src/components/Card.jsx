import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile-img.jpg'; // Ensure you have a backup image

export const Card = ({ movie }) => {
  const { poster_path, id, overview, title, vote_average, vote_count } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : profile;

  return (
    <div className='col'>
      <div className="card shadow-sm" title={title}>
        <img src={image} alt={title} className='card-img-top' />
        <div className="card-body">
          <h5 className='card-title text-primary text-overflow-1'>{title}</h5>
          <p className='card-text text-overflow-2'>{overview}</p>
          <div className='d-flex align-items-center justify-content-between'>
            <Link to={`/movie/${id}`} className='btn btn-outline-primary btn-sm stretched-link'>Read More</Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i> {vote_average} | {vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
