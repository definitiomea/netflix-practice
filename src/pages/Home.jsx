import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Banner";
import { movieAction } from "../redux/actions/movieAction";

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
            {/* 호출할 컴포넌트들... */}
            <h1>Top Rated Movie</h1>
            <h1>Upcoming Movie</h1>
        </>
    );
}
 
export default Home;