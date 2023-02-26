import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    allMovies: {
        movies: [],
        currentPage: 1,
        totalPages: null
    },
    genreMovies: {
        movies: [],
        currentPage: 1,
        totalPages: null
    },
    searchMovies: {
        movies: [],
        currentPage: 1,
        totalPages: null
    },
    topRatedMovies: {
        movies: [],
        currentPage: 1
    },
    genres: [],
    selectedMovie: null,
    mode: 'light',
    loading: null
};

const getGenres = createAsyncThunk(
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
    async ({keyword, currentPage}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.search(keyword, currentPage);
            const results = await Promise.all((data.results.map(async (el) => {
                const resp = await dispatch(movieActions.movieById({id: el.id}));
                return resp.payload
            })))
            return {...data, results: results.filter(el => el !== undefined)};
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({currentPage}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getMovies(currentPage);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const getTopRated = createAsyncThunk(
    'movieSlice/getTopRated',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getTopRated();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const moviesByGenres = createAsyncThunk(
    'movieSlice/moviesByGenres',
    async ({currentPage, ids}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.moviesByGenre(ids, currentPage);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const movieById = createAsyncThunk(
    'movieSlice/movieById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.movieById(id);
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
        setCurrentPage: (state, action) => {
            switch (action.payload.name) {
                case ('allMovies'):
                    state.allMovies.currentPage = action.payload.p;
                    break;
                case ('genreMovies'):
                    state.genreMovies.currentPage = action.payload.p;
                    break;
                case ('searchMovies'):
                    state.searchMovies.currentPage = action.payload.p;
                    break;
                default:
                    return {...state}
            }
        },
        setMode: (state, action) => {
            state.mode = action.payload.checked ? 'dark' : 'light';
        }
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            state.allMovies.movies = action.payload.results;
            state.allMovies.totalPages = action.payload.total_pages;
        })
        .addCase(movieById.fulfilled, (state, action) => {
            state.selectedMovie = action.payload;
        })
        .addCase(search.fulfilled, (state, action) => {
            state.searchMovies.movies = action.payload.results;
            state.searchMovies.totalPages = action.payload.total_pages;
        })
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
        })
        .addCase(getTopRated.fulfilled, (state, action) => {
            state.topRatedMovies.movies = action.payload.results;
        })
        .addCase(moviesByGenres.fulfilled, (state, action) => {
            state.genreMovies.movies = action.payload.results;
            state.genreMovies.totalPages = action.payload.total_pages;
        })
});


const {reducer: movieReducer, actions: {setCurrentPage, setMode}} = movieSlice;

const movieActions = {
    getGenres,
    getMovies,
    search,
    moviesByGenres,
    movieById,
    getTopRated,
    setCurrentPage,
    setMode
}

export {movieReducer, movieActions}
