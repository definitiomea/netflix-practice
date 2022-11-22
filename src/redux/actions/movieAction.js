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

            const genreApi = api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`);

            let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([popularMovieApi, topRatedMovieApi, upComingMovieApi, genreApi]);
            console.log("genre test", genreList);

            dispatch(movieActions.getMovie([popularMovies.data, topRatedMovies.data, upComingMovies.data, genreList.data.genres]));
        } catch(error) {
            /* 에러 핸들링하는 공간 */
            dispatch(movieActions.getMoviesFailure());
        }
    }
}

export const movieAction = { getMovies };