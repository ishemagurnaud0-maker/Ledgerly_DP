import {useState,useEffect} from "react";


const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = (keyword:string) =>{
    const [gifUrl,setGifUrl] = useState<string>(''); 

    const fetchGifs = async () =>{
        try{
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(' ').join('')}&limit=1`);
                const {data} = await response.json();
                setGifUrl(data[0]?.images?.downsized_medium?.url);



        }catch(err){
            console.log('Error fetching gifs:',err);
            setGifUrl('https://media.tenor.com/CW5l9EuXAUYAAAAM/nft-nfts.gif');
        }
    }
    useEffect(() =>{
        if(keyword){
            fetchGifs();
            
 }
    },[]);

    return gifUrl;

}

export default useFetch;