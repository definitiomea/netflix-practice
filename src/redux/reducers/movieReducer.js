import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {}
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMovie(state, action) {
            state.popularMovies = action.payload[0];
            state.topRatedMovies = action.payload[1];
            state.upComingMovies = action.payload[2];
        }
    }
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;