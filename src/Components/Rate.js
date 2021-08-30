import React from 'react';
import StarIcon from '@material-ui/icons/Star';


const Rate = ({setRating })=>{
    let arr = Array(6).fill(<StarIcon style={{color:'yellow'}}/>)
    
    return (
        <div className="Rate" >
            
        {arr.map((el,i)=> <button onClick={()=>setRating(i)} className= "star-btn">{el}</button>)}
            
        </div>
    )}

export default Rate 


