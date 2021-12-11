import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getgif";
import useFetch from "../hooks/useFetch";
import GifGridItem from "./GifGridItem";


const GifGrid = ({category}) =>{

    const {data:images, loading} = useFetch(category);

    return <div>

        <h3>{category}</h3>

        {loading && <h2>Loading.....</h2>}

        <div className="card-container">
            {
                images.map( image =>{
                    return <GifGridItem 
                        key={image.id}
                        {...image}
                    />
                })
            }
        </div>

    </div>

}

export default GifGrid


