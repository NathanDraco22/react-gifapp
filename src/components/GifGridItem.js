import React from "react";


const GifGridItem = ({ id, title, image })=>{

    return (
    <div className="card-item animate__animated animate__fadeIn">
        <img src={image} alt= {title}></img>
        <p>{title}</p>
    </div>
    )
}

export default GifGridItem