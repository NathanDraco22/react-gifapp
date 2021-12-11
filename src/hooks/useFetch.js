const { useState, useEffect } = require("react");
const { getGifs } = require("../helpers/getgif");





const useFetch = (category)=>{

    const [state, setState] = useState({data:[], loading:true});


    useEffect(
        ()=>{
            getGifs(category).then((data)=>setState({data, loading:false}));
        }, [category]
    )

    return state


}

export default useFetch