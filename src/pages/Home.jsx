import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

import Banner from "../Components/Banner";
import MovieSlide from "../Components/MovieSlide";

const Home = () => {
    const dispatch = useDispatch();
    const { popularMovies, topRatedMovies, upComingMovies } = useSelector((state) => state.movie);
    /* 호출을 확인한 코드
    console.log(popularMovies, topRatedMovies, upComingMovies); */

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);

    return (
        <>
            {popularMovies.results && <Banner movie={popularMovies.results[0]}></Banner>}
            <h1>Popular Movie</h1>
            {popularMovies && <MovieSlide movies={popularMovies}></MovieSlide>}
            <h1>Top Rated Movie</h1>
            {topRatedMovies && <MovieSlide movies={topRatedMovies}></MovieSlide>}
            <h1>Upcoming Movie</h1>
            {upComingMovies && <MovieSlide movies={upComingMovies}></MovieSlide>}
        </>
    );
}
 
export default Home;