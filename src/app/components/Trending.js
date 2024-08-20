import { useEffect, useState } from "react";
import '../globals.css';

export default function Trending() {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        getTrendingMovieData("movie");
    }, []);

    async function getTrendingMovieData(type) {
        try {
            const apiKey = '7c1be07eb15d082f585c8c039f3ca132';
            let resp = await get(`https://api.themoviedb.org/3/trending/$(type)/day?api_key=7c1be07eb15d082f585c8c039f3ca132`);
            console.log(21, resp.data.results);

            setMovieData(resp.data.results);

        } catch (e) {

        } finally {

        }
    }

return (
<>
{/* <div className="background_container"> */}
<div className ="button_container">
    <button onClick={() => {
            getTrendingMovieData("movie");
        }
    }>
        Trending Movies
        </button>
        <button onClick={() => {
            getTrendingMovieData("tv");
        }
    }>
        Trending TV
    </button>
        </div>
        
        <div className='flex-container'>
            {movieData.map((item) =>
            <div className="movie_item">
               <img src= 'https://api.themoviedb.org/3/movie/1022789/images' />
               <div className="movie_name">
                {item.original_title ? item.original_title : item.original_name}
                
                </div> 
                </div>
            )}
        </div>
        {/* </div>  */}
        </>
);
    
}