import React from 'react';
import StarIcon from '@material-ui/icons/Star';


const Rate = ({setRating })=>{
    let arr = Array(5).fill(<StarIcon style={{color:'yellow'}}/>)
    
    return (
        <div className="Rate" >
            <button onClick={()=>setRating(1)} className="star-btn0">{arr[0]}</button>
            <button onClick={()=>setRating(2)} className="star-btn1">{arr[1]}</button>
            <button onClick={()=>setRating(3)} className="star-btn2">{arr[2]}</button>
            <button onClick={()=>setRating(4)} className="star-btn3">{arr[3]}</button>
            <button onClick={()=>setRating(5)} className="star-btn4">{arr[4]}</button>
            
            
        </div>
    
    
    )}

export default Rate 


