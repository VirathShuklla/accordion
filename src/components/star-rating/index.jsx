import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './styles.css';

export default function StarRating({noStars=5}){
    const [rating, setrating] = useState(0)
    const [hover, sethover] = useState(0)

    function handleClick(getCurrentId){
        setrating(getCurrentId);

    }
    function handleMouseEnter(getCurrentId){
        sethover(getCurrentId);
    }
    function handleMouseLeave(getCurrentId){
        sethover(rating);
    }


    return(
        <div className="container">
        <div className="star-rating">
        {
            [...Array(noStars)].map((_,index)=> {
                return <FaStar
                key = {index+1}
                className={index+1 <= (hover || rating) ? 'active' : 'inactive'}
                onClick = {()=>handleClick(index+1)}
                onMouseMove = {()=>handleMouseEnter(index+1)}
                onMouseLeave = {()=>handleMouseLeave(index+1)}
                size={40}
                />
            })
        }
        <br/>
        <button onClick={()=> {setrating(0); sethover(0)}}>Reset Rating</button>
        </div>
        </div>
    )
}