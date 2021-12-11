import { useState } from "react"

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";



const GifExpertApp = ()=>{

    const [ categories, setCategories ] = useState(["One Punch"]);

    return <>
        <h2>Gif Expert App</h2>

        <AddCategory setCategories = {setCategories} />
        <hr/>

        <ol>

            {
                categories.map((cate)=>
                    <GifGrid
                        key={cate} 
                        category={cate}/>
                )
            }


        </ol>
    </>

}

export default GifExpertApp;