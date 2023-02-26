const baseURL = 'https://api.themoviedb.org/3';

const poster = 'https://image.tmdb.org/t/p/w500';

const urls = {
    allMovies: (page) => `/discover/movie?page=${page}`,
    moviesByGenre: (page, ids) => `/discover/movie?page=${page}&with_genres=${ids}`,
    movieById: (id) => `/movie/${id}`,
    genres: '/genre/movie/list',
    search: (keyWord, page) => `/search/keyword?query=${keyWord}&page=${page}`,
    topRated: '/movie/top_rated'
}

export {baseURL, urls, poster}