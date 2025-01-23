import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    // const [trailerKey, setTrailerKey] = useState(null);

    //fetching trailer video and updating the store with the trailer video
    const getMovieVideos = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(videos => videos.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // setTrailerKey(trailer.key);
        dispatch(addTrailerVideo(trailer)); // up to REDUX store
 
    } 

    useEffect(()=>{
        getMovieVideos();
    },[])

}

export default useMovieTrailer