import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState = {
    currentPage: 1,
    movies: [],
    genres: [],
    moviesByGenres: [],
    ids: null

};

let getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({keyword, page}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.search(keyword, page);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const moviesByGenres = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, ids}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.moviesByGenre(page, ids);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)



const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setIds: (state, action) => {
            const ids = state.genres.find(genre => genre === action.payload);
            state.ids = ids;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
        })
        .addCase(getMovies.fulfilled, (state, action) => {
            console.log('getMovies action.payload ', action.payload)
            state.movies = action.payload.results;
        })
});

const movieActions = {
    getGenres,
    getMovies,
    search,
    moviesByGenres
}

const {reducer: movieReducer} = movieSlice;

export {movieReducer, movieActions}
