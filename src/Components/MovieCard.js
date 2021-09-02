import React from "react";
import StarIcon from '@material-ui/icons/Star';
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  const array = [];
  const array2 = [];
  array.length = movie.rate;
  array2.length = 5 - movie.rate;

  return (
    <Link to= {`/trailer/${movie.id}`} style={{textDecoration:'none'}} key={movie.id}>
    <div className="MovieCard">
      <img className="poster" src={movie.img} alt="poster" />
      <h4 className="title">{movie.title}</h4>
      <span>
        {array
          .fill(<StarIcon style={{color:'yellow'}}/>)
          .concat(array2.fill(<StarIcon style={{color:'black'}}/>))}
      </span>
      <p className="genre">{movie.genre}</p>
      <p className="description">{movie.description}</p>
    </div>
    </Link>
  );
};

export default MovieCard;
