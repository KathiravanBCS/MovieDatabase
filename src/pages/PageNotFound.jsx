import React from 'react'
import PageNotFoundImage from '../assets/glitch-background_23-2148068933.jpg'
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div className='container d-flex' style={{alignItems:'center',flexDirection:'column',gap:"20px"}}>
      <img src={PageNotFoundImage} alt="pagenotfound" className='img-fluid' style={{height:"400px",width:'400px'}} />
      <p className="text-center">
        <Link to='/' className='btn btn-danger'>{" "} Goto Home Page</Link>
      </p>
    </div>
  )
}
