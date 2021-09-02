
import React from "react";
import { useParams } from "react-router-dom";


const Trailer = ({movies}) => { 
    const {ID}=useParams();
    
    return (
        <div className='Trailer'>
            <div className='TrailerImg'>
                <img src={(movies.find(movie=> movie.id==ID)).img}/>
            </div>
            <div className='TrailerDetails'>
                <h2 style={{color:'white', marginBottom:'5%'}}>{(movies.find(movie=> movie.id==ID)).title}</h2>
                <p style={{color:'white',  marginBottom:'5%'}}>{(movies.find(movie=> movie.id==ID)).description}</p>
                <span>{(movies.find(movie=> movie.id==ID)).trailer}</span>
            </div>   
            
        </div>
    )

}


export default Trailer