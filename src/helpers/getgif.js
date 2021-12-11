


export const getGifs = async( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FCt25aB9hNfDM5T1Z6gNWTz6OgRKpr2T&q=${encodeURI(category)}&limit=10`

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map( img =>{

        return {
            id : img.id,
            title : img.title,
            image : img.images.downsized_medium.url,
        }

    });


    return gifs;
    

}