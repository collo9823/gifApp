export const getGifs = async(category)=>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=lI9DLCrvQHtoiQeoGttawiQfRkFvf3qY&q=${ category }&limit=30`;

    const resp= await fetch(URL);

    const {data = []} = await resp.json()

    const gifs = data.map(img=>({   
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

        }))
        console.log(gifs)
        return gifs;
}

