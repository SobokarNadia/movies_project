const baseURL = 'https://api.themoviedb.org/3';


const urls = {
    movies:{
        allMovies: (page) => `/discover/movie?page=${page}`,
        moviesByGenre: (page=1, ids) => `/discover/movie?page=${page}&with_genres=${ids}`,
        getImage: (id) => `/movie/${id}/images`
    },
    genres: '/genre/movie/list',
    search: (keyWord, page =1) => `/search/keyword?query=${keyWord}&page=${page}`
}

export {baseURL, urls}