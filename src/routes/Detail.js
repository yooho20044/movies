import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovie(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            {loading ? <h1>Loading....</h1> : 
            <>
                <h1>{movie.data.movie.title} ( Rating: {movie.data.movie.rating} )</h1>
                <h3>{movie.data.movie.slug}</h3>
                <img src={movie.data.movie.medium_cover_image} />
                <p>{movie.data.movie.description_full}</p>
                <ul>
                    {movie.data.movie.genres.map((x) => <li key={x}>{x}</li>)}
                </ul>
            </>
            }
        </div>
    )
}

export default Detail;