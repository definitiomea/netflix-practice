import api from "../api";

function getMovies() {
    return async (dispatch, getState) => {
        const popularMovieApi = await api.get(`/movie/popular?api_key=<<api_key>>&language=en-US&page=1`);

        /* let url1 = `https://api.themoviedb.org/3`;
        let response1 = await fetch(url1);
        let data1 = await response1.json();
        dispatch(movieActions.getPop({data1}));

        let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        dispatch(movieActions.getTop({data2}));

        let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        dispatch(movieActions.getUpcom({data3})); */
    }
}

export const movieAction = { getMovies };