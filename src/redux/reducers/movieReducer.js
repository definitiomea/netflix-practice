import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    genreList: [],
    loading: true
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMoviesRequest(state, action) {
            state.loading = true;
        },
        getMovie(state, action) {
            state.popularMovies = action.payload[0];
            state.topRatedMovies = action.payload[1];
            state.upComingMovies = action.payload[2];
            state.genreList = action.payload[3];
            state.loading = false;
        },
        getMoviesFailure(state, action) {
            state.loading = false;
        }
    }
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;