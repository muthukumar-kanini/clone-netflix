import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null,
        popularMovies: null,
        trendingMovies:null,
        upComingMovies:null
    },
    reducers:{
        addNowPlayingMovie : (state,action)=>{
            state.nowPlayingMovie=action.payload
        } ,
        addTrailerVideo: (state , action) => {
            state.trailerVideo = action.payload
        } ,
        addPopularMovies:(state , action )=>{
            state.popularMovies= action.payload
        },
        addTrendingMovies:(state , action)=>{
            state.trendingMovies=action.payload;
        },
        addUpComingMovies:(state , action )=>{
            state.upComingMovies=action.payload
        }
    }

})
export const {addNowPlayingMovie,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpComingMovies} = movieSlice.actions
export default movieSlice.reducer