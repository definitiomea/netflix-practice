import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
    return async (dispatch, getState) => {
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedMovieApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upComingMovieApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

        /* 뒤에 불러올 세부 자료를 정해서 header까지 불러오지 않게 하면 된다. */
        let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([popularMovieApi, topRatedMovieApi, upComingMovieApi]);

        /* GOOD! 이렇게 하면 반환된 객체 중에서 data 부분만 따로 불러오게 된다. */
        dispatch(movieActions.getMovie([popularMovies.data, topRatedMovies.data, upComingMovies.data]));
    }
}

export const movieAction = { getMovies };