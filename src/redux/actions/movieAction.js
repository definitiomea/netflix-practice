import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
    return async (dispatch, getState) => {
        try {
            dispatch(movieActions.getMoviesRequest());
            
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedMovieApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upComingMovieApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

            let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([popularMovieApi, topRatedMovieApi, upComingMovieApi]);
            
            dispatch(movieActions.getMovie([popularMovies.data, topRatedMovies.data, upComingMovies.data]));
        } catch(error) {
            /* 에러 핸들링하는 공간 */
            dispatch(movieActions.getMoviesFailure());
        }
    }
}

export const movieAction = { getMovies };